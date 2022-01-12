import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {interval, Observable, of, range } from "rxjs";
import { map, mergeMap, catchError, tap, switchMap, concatMap, takeUntil, scan, delay } from 'rxjs/operators';
import { CustomersService } from "../services/customers.service";
import { CustomersAction } from "../types/customers-action.enum";
import { CustomersModel } from "../types/customers.model";
import { fetchCustomersList } from "./customers.actions";


@Injectable()
export class CustomersEffects {

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCustomersList),
      mergeMap(({amount}) => range(1, amount)
        .pipe(
          concatMap(() => this.customersSerivce.fetchCustomer()
              .pipe(
                map((customer: CustomersModel) => {
                  return {
                    type: CustomersAction.CUSTOMERS_LIST_FETCH_SUCCESS,
                    customersList: customer }
                }),
                catchError(() => of({ type: CustomersAction.CUSTOMERS_LIST_FETCH_ERROR}))
              )
          ),
        )
      )
    )
  )

  constructor(private actions$: Actions, private customersSerivce: CustomersService) {
  }

}
