import { Injectable } from '@angular/core';
import { ProductType } from '../model/product-type';
import {Product} from '../model/product';
import {LigthProduct} from "../model/ligth-product"
import {Observable} from 'rxjs/Rx';

import {AdminProductType} from "../model/admin/admin-product-type";
import {RestService} from "./rest.service";

@Injectable()
export class ProductTypeService {

  private productUrl = 'productType/getAllVisibleProductTypes';
  private productByProductTypeUrl = 'productType/getProductsByProductType';
  private createProductTypeUrl = 'productType/create';
  private updateProductTypeUrl = 'productType/update';
  private deleteProductTypeUrl = 'productType/delete';
  private productTypeAllUrl = 'productType/getAllProductTypes';
  private productTypeById = 'productType/getProductTypeById';

  constructor (private restService: RestService) {}

  getAllVisibleProductTypes() : Observable<ProductType[]> {
    return this.restService.get<ProductType[]>(this.productUrl);
  }

  getProductByTypeId(id:number) : Observable<LigthProduct[]> {
    return this.restService.get(this.productByProductTypeUrl, id);
  }

  createProductType(productType:AdminProductType) : void {
      this.restService.post(this.createProductTypeUrl, productType).subscribe();
  }

  updateProductType(productType:AdminProductType) : void {
    this.restService.post(this.updateProductTypeUrl, productType).subscribe();
  }

  deleteProductType(productType:AdminProductType) : void {
    this.restService.post(this.deleteProductTypeUrl, productType).subscribe();
  }

  getAllProductTypes() : Observable<AdminProductType[]> {
    return this.restService.get<AdminProductType[]>(this.productTypeAllUrl);

  }

  getProductTypeById(id: number) : Observable<ProductType> {
    return this.restService.get<ProductType>(this.productTypeById, id);

  }
}
