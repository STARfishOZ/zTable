import {ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CustomersModel } from "src/app/pages/customers/types/customers.model";

@Component({
  selector: 'ui-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CustomersModel ) {}
}
