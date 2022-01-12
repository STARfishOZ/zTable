import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {AppState, reducers } from './store/store.state';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

export { AppState };

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
