import {ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatSliderChange } from "@angular/material/slider";
import {select, Store } from "@ngrx/store";
import {BehaviorSubject, interval, Observable, of, Subject } from "rxjs";
import {debounceTime, map, repeatWhen, switchMap, takeUntil, takeWhile, tap } from "rxjs/operators";
import { TableInterface } from "src/app/modules/table/public_api";

import * as CustomersActions from '../store/customers.actions';
import { selectCustomersList } from "../store/customers.selectors";
import { CustomersAction } from "../types/customers-action.enum";
import { CustomersModel } from "../types/customers.model";

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersComponent implements OnInit {

  private stopTimer$ = new Subject();
  private startTimer$ = new Subject();
  private sliderValue = new BehaviorSubject<number>(1);

  customers$: Observable<CustomersModel[]> | undefined;
  customersAmount = 0;
  loading = false;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.customers$ = this.store.pipe(
      takeUntil(this.stopTimer$),
      select(selectCustomersList),
      map((data) => {
        if (this.customersAmount > data.length) {
          return [];
        } else {
          return data;
        }
      }),
      repeatWhen(() => this.startTimer$)
    );

    this.sliderValue.pipe(debounceTime(1000)).subscribe((data) => this.fetchCustomersList(data));
  }

  fetchCustomersList(amount: number): void {
    this.customersAmount = amount;
    this.store.dispatch(CustomersActions.emptyCustomerList());
    this.store.dispatch(CustomersActions.fetchCustomersList({amount}))
  }

  onTimerReset(detailsIsOpen: boolean): void {
    detailsIsOpen? this.stopTimer$.next() : this.startTimer$.next();
  }

  onInputChange(event: MatSliderChange): void {
    this.sliderValue.next(event.value);
  }
}
