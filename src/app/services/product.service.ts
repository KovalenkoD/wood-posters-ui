import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Product} from "../model/product";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  private productUrl = 'http://localhost:8080/products/getProductById';

  constructor (private http: Http) {}

  getProductById(id:number) : Observable<Product> {
      return this.http.get(this.productUrl + "/" + id)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



}
