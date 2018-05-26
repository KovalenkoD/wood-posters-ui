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
  private updateProductTypeUrl = 'http://localhost:8080/productType/update';
  private deleteProductTypeUrl = 'http://localhost:8080/productType/delete';
  private productTypeAllUrl = 'http://localhost:8080/productType/getAllProductTypes';
  private productTypeById = 'http://localhost:8080/productType/getProductTypeById';

  constructor (private http: HttpClient, private oldHttp: Http) {}

  getAllVisibleProductTypes() : Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.productUrl, { withCredentials: true });
  }

  getProductByTypeId(id:number) : Observable<Product[]> {
    return this.oldHttp.get(this.productByProductTypeUrl + "/" + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  createProductType(productType:AdminProductType) : void {
      this.http.post(this.createProductTypeUrl, productType, { withCredentials: true }).subscribe();
  }

  updateProductType(productType:AdminProductType) : void {
    this.http.post(this.updateProductTypeUrl, productType, { withCredentials: true }).subscribe();
  }

  deleteProductType(productType:AdminProductType) : void {
    this.http.post(this.deleteProductTypeUrl, productType, { withCredentials: true }).subscribe();
  }

  getAllProductTypes() : Observable<AdminProductType[]> {
    return this.http.get<AdminProductType[]>(this.productTypeAllUrl, { withCredentials: true });

  }

  getProductTypeById(id: number) : Observable<ProductType> {
    return this.http.get<ProductType>(this.productTypeById + "/" + id, { withCredentials: true });

  }

}
