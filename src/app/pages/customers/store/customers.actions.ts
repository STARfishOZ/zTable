import { createAction, props } from "@ngrx/store";
import { CustomersAction } from "../types/customers-action.enum";
import { CustomersModel } from "../types/public_api";

export const fetchCustomersList = createAction(
  CustomersAction.CUSTOMERS_LIST_FETCH,
  props<{ amount: number}>()
);
export const emptyCustomerList = createAction(
  CustomersAction.CUSTOMERS_LIST_EMPTY
);

export const fetchCustomersListSuccess = createAction(
  CustomersAction.CUSTOMERS_LIST_FETCH_SUCCESS,
  props<{ customersList: CustomersModel[] }>()
);

export const fetchCustomersListError = createAction(
  CustomersAction.CUSTOMERS_LIST_FETCH_ERROR,
  props<{ error: ErrorEvent }>()
);
