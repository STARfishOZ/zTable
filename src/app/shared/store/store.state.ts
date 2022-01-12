import { ActionReducerMap, createFeatureSelector } from "@ngrx/store"
import { customersReducer } from "src/app/pages/customers/store/customers.recuder";
import { CustomersState } from "src/app/pages/customers/types/customers-state.interface";

export const reducers: ActionReducerMap<AppState> = {
  customers: customersReducer
}

export const selectCustomersState = createFeatureSelector<AppState, CustomersState>('customers');

export interface AppState {
  customers?: CustomersState;
}
