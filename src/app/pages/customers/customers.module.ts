import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './components/customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { TableModule } from 'src/app/modules/table/table.module';
import { MatSliderModule } from '@angular/material/slider';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './store/customers.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/shared/store/store.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    TableModule,
    MatSliderModule,
    EffectsModule.forFeature([CustomersEffects])
  ],
})
export class CustomersModule { }
