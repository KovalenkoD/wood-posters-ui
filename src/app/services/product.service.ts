import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Product} from "../model/product";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Bundle} from "../model/bundle";
import {AdminProduct} from "../model/admin/admin-product";

@Injectable()
export class ProductService {

  public popularTypeInTrend = 2;
  public popularType = 1;
  public productType = "P";
  public productBundleType = "BP";
  private productUrl = 'http://localhost:8080/products/getProductById';
  private mostPopularProductsByTypeUrl = 'http://localhost:8080/products/getMostPopularProducts';
  private mostPopularBundleByTypeUrl = 'http://localhost:8080/products/getMostPopularBundle';
  private allBundlesUrl = 'http://localhost:8080/products/getAllBundles';
  private relatedProductsUrl = 'http://localhost:8080/products/getRelatedProducts';
  private createProductUrl = 'http://localhost:8080/products/create';


  constructor (private http: Http) {}

  getProductById(id:number) : Observable<Product> {
      return this.http.get(this.productUrl + "/" + id, { withCredentials: true })
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRelatedProducts(id:number) : Observable<Product[]> {
    return this.http.get(this.relatedProductsUrl + "/" + id, { withCredentials: true })
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMostPopularProductsByType(popularType:number) : Observable<Product[]> {
    return this.http.get(this.mostPopularProductsByTypeUrl + "/" + this.productType + "/" + popularType, { withCredentials: true })
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMostPopularBundle(popularType:number) : Observable<Bundle[]> {
    return this.http.get(this.mostPopularBundleByTypeUrl + "/" + this.productBundleType + "/" + popularType, { withCredentials: true })
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  getAllBundles() : Observable<Bundle[]> {
    return this.http.get(this.allBundlesUrl, { withCredentials: true })
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  createProduct(product:AdminProduct) : void {
    this.http.post(this.createProductUrl, product, { withCredentials: true }).subscribe();
  }

}
