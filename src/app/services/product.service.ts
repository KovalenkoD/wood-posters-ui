import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Product} from "../model/product";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Bundle} from "../model/bundle";

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



  constructor (private http: Http) {}

  getProductById(id:number) : Observable<Product> {
      return this.http.get(this.productUrl + "/" + id)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRelatedProducts(id:number) : Observable<Product[]> {
    return this.http.get(this.relatedProductsUrl + "/" + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMostPopularProductsByType(popularType:number) : Observable<Product[]> {
    return this.http.get(this.mostPopularProductsByTypeUrl + "/" + this.productType + "/" + popularType)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMostPopularBundle(popularType:number) : Observable<Bundle[]> {
    return this.http.get(this.mostPopularBundleByTypeUrl + "/" + this.productBundleType + "/" + popularType)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  getAllBundles() : Observable<Bundle[]> {
    return this.http.get(this.allBundlesUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
