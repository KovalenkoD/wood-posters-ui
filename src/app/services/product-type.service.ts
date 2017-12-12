import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ProductType } from '../model/product-type';
import {Product} from '../model/product';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductTypeService {

  private productUrl = 'http://localhost:8080/productType/getAllVisibleProductTypes';
  private productByProductTypeUrl = 'http://localhost:8080/productType/getProductsByProductType';

  constructor (private http: Http) {}

  getAllVisibleProductTypes() : Observable<ProductType[]> {
    return this.http.get(this.productUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  getProductByTypeId(id:number) : Observable<Product[]> {
    return this.http.get(this.productByProductTypeUrl + "/" + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
