import { Injectable } from '@angular/core';
import {Response, Headers, RequestOptions, Http} from '@angular/http';
import { ProductType } from '../model/product-type';
import {Product} from '../model/product';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from "@angular/common/http";
import {AdminProductType} from "../model/admin/admin-product-type";

@Injectable()
export class ProductTypeService {

  private productUrl = 'http://localhost:8080/productType/getAllVisibleProductTypes';
  private productByProductTypeUrl = 'http://localhost:8080/productType/getProductsByProductType';
  private createProductTypeUrl = 'http://localhost:8080/productType/create';
  private productTypeAllUrl = 'http://localhost:8080/productType/getAllProductTypes';

  constructor (private http: HttpClient, private oldHttp: Http) {}

  getAllVisibleProductTypes() : Observable<ProductType[]> {
    return this.oldHttp.get(this.productUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  getProductByTypeId(id:number) : Observable<Product[]> {
    return this.oldHttp.get(this.productByProductTypeUrl + "/" + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  createProductType(productType:AdminProductType) : void {
      this.http.post(this.createProductTypeUrl, productType, { withCredentials: true }).subscribe();
  }

  getAllProductTypes() : Observable<AdminProductType[]> {
    return this.http.get<AdminProductType[]>(this.productTypeAllUrl, { withCredentials: true });

  }

}
