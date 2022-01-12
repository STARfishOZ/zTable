import { TableInterface } from "src/app/modules/table/public_api";

export interface CustomersModel extends TableInterface {
  name?: string | undefined;
  last_name?: string;
  age?: number;
  image_url?: string;
}
