import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ProductType }           from '../model/product-type';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductTypeService {

  private productUrl = 'http://localhost:8080/productType/getAllProductTypes';

  constructor (private http: Http) {}

  getAllProductTypes() : Observable<ProductType[]> {

    // ...using get request
    return this.http.get(this.productUrl)
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


  getProductTypes() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
      .map((res:Response) => res.json());
  }

}
