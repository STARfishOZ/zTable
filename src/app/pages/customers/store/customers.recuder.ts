import {Action, createReducer, on } from "@ngrx/store";
import {CustomersModel, CustomersState } from "../types/public_api";
import {emptyCustomerList, fetchCustomersListError, fetchCustomersListSuccess } from "./customers.actions";

export const initialState: CustomersState = {
  customersList: [],
};

const reducer = createReducer(
  initialState,
  on(fetchCustomersListSuccess, (state, {customersList}): CustomersState =>
  {
    return {...state, customersList: [...state.customersList, customersList] as CustomersModel[]};
  }),
  on(emptyCustomerList, (state): CustomersState =>
  {
    return {...state, customersList: []};
  }),
);

export function customersReducer(state: CustomersState | undefined, action: Action) {
  return reducer(state, action);
}
