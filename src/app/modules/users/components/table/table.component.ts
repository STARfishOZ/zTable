import {ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  
}
