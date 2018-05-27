import { Injectable } from '@angular/core';
import {ProductType} from "../model/product-type";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {AdminBaseNameObject} from "../model/admin/admin-base-name-object";

@Injectable()
export class CategoryService {

  private getAllCategoriesURL = 'http://localhost:8080/categories/getAllCategories';
  private getAllCategoriesAdminURL = 'http://localhost:8080/categories/getAllCategoriesAdmin';
  private createCategoryURL = 'http://localhost:8080/categories/create';
  private updateCategoryURL = 'http://localhost:8080/categories/update';
  private deleteCategoryURL = 'http://localhost:8080/categories/delete';


  constructor(private http: HttpClient) { }

  getAllCategories() : Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.getAllCategoriesURL, { withCredentials: true });
  }

  createCategory(category:AdminBaseNameObject) : void {
    this.http.post(this.createCategoryURL, category, { withCredentials: true }).subscribe();
  }

  updateCategory(category:AdminBaseNameObject) : void {
    this.http.post(this.updateCategoryURL, category, { withCredentials: true }).subscribe();
  }

  deleteCategory(category:AdminBaseNameObject) : void {
    this.http.post(this.deleteCategoryURL, category, { withCredentials: true }).subscribe();
  }

  getAllCategoriesAdmin() : Observable<AdminBaseNameObject[]> {
    return this.http.get<AdminBaseNameObject[]>(this.getAllCategoriesAdminURL, { withCredentials: true });

  }

}
