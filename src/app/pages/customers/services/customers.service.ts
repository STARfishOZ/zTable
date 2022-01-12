import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { CustomersModel } from "../types/customers.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http: HttpClient) {
  }

  fetchCustomer(): Observable<CustomersModel> {
    return this.http.get(`${environment.urls.mainApi}`) as Observable<CustomersModel>;
  }

}
