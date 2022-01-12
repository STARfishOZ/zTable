import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { TableComponent } from './components/table/table.component';
import { TableDetailsComponent } from './components/table-details/table-details.component';

@NgModule({
  declarations: [
    TableComponent,
    TableDetailsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    TableComponent,
  ]
})
export class TableModule { }
