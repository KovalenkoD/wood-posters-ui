import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ProductColor} from "../model/product-color";
import {AdminBaseNameObject} from "../model/admin/admin-base-name-object";
import {RestService} from "./rest.service";

@Injectable()
export class ProductColorService {

  private getAllProductColorsURL = 'productColors/getAllProductColors';
  private getAllProductColorsAdminURL = 'productColors/getAllProductColorsAdmin';
  private createProductColorURL = 'productColors/create';
  private updateProductColorURL = 'productColors/update';
  private deleteProductColorURL = 'productColors/delete';


  constructor(private restService: RestService) { }


  getAllProductColors() : Observable<ProductColor[]> {
    return this.restService.get<ProductColor[]>(this.getAllProductColorsURL);

  }

  createProductColor(productColor:AdminBaseNameObject) : void {
    this.restService.post(this.createProductColorURL, productColor).subscribe();
  }

  updateProductColor(productColor:AdminBaseNameObject) : void {
    this.restService.post(this.updateProductColorURL, productColor).subscribe();
  }

  deleteProductColor(productColor:AdminBaseNameObject) : void {
    this.restService.post(this.deleteProductColorURL, productColor).subscribe();
  }

  getAllProductColorsAdmin() : Observable<AdminBaseNameObject[]> {
    return this.restService.get<AdminBaseNameObject[]>(this.getAllProductColorsAdminURL);
  }

}
