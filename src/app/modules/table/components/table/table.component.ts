import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TableInterface } from "../../types/table.interface";
import { TableDetailsComponent } from "../table-details/table-details.component";

@Component({
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  displayedColumns = ['name', 'last_name', 'age'];

  @Input()
  data: TableInterface[] = [];

  @Input()
  isLoading = false;

  @Output()
  isDetailsOpen = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog) { }

  openDetails(row: Partial<TableInterface>): void {
    this.isDetailsOpen.emit(true);

    this.dialog.open(TableDetailsComponent, {
      data: {...row},
      minWidth: 400
    });

    this.dialog.afterAllClosed.subscribe(() => this.isDetailsOpen.emit(false));
  }
}
