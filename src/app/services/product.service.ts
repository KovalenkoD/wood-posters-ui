import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Product} from "../model/product";

import {Bundle} from "../model/bundle";
import {AdminProduct} from "../model/admin/admin-product";
import {RestService} from "./rest.service";

@Injectable()
export class ProductService {

  public popularTypeInTrend = 2;
  public homeSliderPopularType: number = 3;
  public popularType = 1;
  public productType = "P";
  public productBundleType = "BP";
  private productUrl = 'products/getProductById';
  private productAdminUrl = 'products/getAdminProductById';
  private mostPopularProductsByTypeUrl = 'products/getMostPopularProducts';
  private mostPopularBundleByTypeUrl = 'products/getMostPopularBundle';
  private allBundlesUrl = 'products/getAllBundles';
  private relatedProductsUrl = 'products/getRelatedProducts';
  private createProductUrl = 'products/create';
  private updateProductUrl = 'products/update';
  private createBundleUrl = 'products/createBundle';

  constructor (private restService: RestService) {}

  getProductById(id:number) : Observable<Product> {
      return this.restService.get(this.productUrl , id);
  }

  getAdminProductById(id:number) : Observable<AdminProduct> {
    return this.restService.get(this.productAdminUrl , id);
  }

  getRelatedProducts(id:number) : Observable<Product[]> {
    return this.restService.get(this.relatedProductsUrl, id);
  }

  getMostPopularProductsByType(popularType:number) : Observable<Product[]> {
    return this.restService.get(this.mostPopularProductsByTypeUrl , this.productType + "/" + popularType);
  }

  getMostPopularBundle(popularType:number) : Observable<Bundle[]> {
    return this.restService.get(this.mostPopularBundleByTypeUrl , this.productBundleType + "/" + popularType);
  }


  getAllBundles() : Observable<Bundle[]> {
    return this.restService.get(this.allBundlesUrl);
  }

  createProduct(product:AdminProduct) : void {
    this.restService.post(this.createProductUrl, product).subscribe();
  }

  updateProduct(product:AdminProduct) : void {
    this.restService.post(this.updateProductUrl, product).subscribe();
  }

  createBundle(product:AdminProduct) : void {
    this.restService.post(this.createBundleUrl, product).subscribe();
  }

}
