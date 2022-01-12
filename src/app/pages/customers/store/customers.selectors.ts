import { createSelector } from "@ngrx/store";
import { selectCustomersState } from "src/app/shared/store/store.state";
import { CustomersState } from "../types/public_api";

export const selectCustomersList = createSelector(
  selectCustomersState,
  (state: CustomersState) => state.customersList
);
