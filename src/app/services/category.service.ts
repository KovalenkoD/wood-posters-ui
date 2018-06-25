import { Injectable } from '@angular/core';
import {Category} from "../model/category";
import {Observable} from "rxjs/Observable";
import {AdminBaseNameObject} from "../model/admin/admin-base-name-object";
import {RestService} from "./rest.service";

@Injectable()
export class CategoryService {

  private getAllCategoriesURL = 'categories/getAllCategories';
  private getAllCategoriesAdminURL = 'categories/getAllCategoriesAdmin';
  private createCategoryURL = 'categories/create';
  private updateCategoryURL = 'categories/update';
  private deleteCategoryURL = 'categories/delete';


  constructor(private restService: RestService) { }

  getAllCategories() : Observable<Category[]> {
    return this.restService.get<Category[]>(this.getAllCategoriesURL);
  }

  createCategory(category:AdminBaseNameObject) : void {
    this.restService.post(this.createCategoryURL, category).subscribe();
  }

  updateCategory(category:AdminBaseNameObject) : void {
    this.restService.post(this.updateCategoryURL, category).subscribe();
  }

  deleteCategory(category:AdminBaseNameObject) : void {
    this.restService.post(this.deleteCategoryURL, category).subscribe();
  }

  getAllCategoriesAdmin() : Observable<AdminBaseNameObject[]> {
    return this.restService.get<AdminBaseNameObject[]>(this.getAllCategoriesAdminURL);

  }
}
