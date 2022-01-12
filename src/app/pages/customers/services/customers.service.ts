import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { CustomersModel } from "../types/customers.model";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http: HttpClient) {
  }

  fetchCustomer(): Observable<CustomersModel> {
    return this.http.get('https://v82tr0s6oa.execute-api.us-east-1.amazonaws.com/dev/') as Observable<CustomersModel>;
  }
  // {"name": "Aman", "last_name": "Travis", "age": 49, "image_url": "", "is_COVID_positive": "false"}

}
