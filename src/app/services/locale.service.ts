import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../model/product-type";
import {Observable} from "../../../node_modules/rxjs";
import {AdminSalesOrder} from "../model/admin/admin-sales-order";

@Injectable()
export class LocaleService {

  private changeLocaleUrl = 'http://localhost:8080/wizard/changeLocale';
  private getCurrentLocaleUrl = 'http://localhost:8080/wizard/getCurrentLocale';


  constructor(private http: HttpClient) {

  }

  changeLocale(locale: string) : void {
     this.http.get<void>(this.changeLocaleUrl + "/" + locale, { withCredentials: true }).subscribe(value => location.reload());
  }

  getCurrentLocale() : Observable<any> {
    return this.http.get<any>(this.getCurrentLocaleUrl, { withCredentials: true });
  }



}
