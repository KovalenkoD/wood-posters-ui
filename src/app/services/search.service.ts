import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {Product} from "../model/product";

import {RestService} from "./rest.service";

@Injectable()
export class SearchService {

  private searchUrl = 'products/searchProduct';

  public searchSubject = new BehaviorSubject<string>(null);
  public searchProductsSubject = new BehaviorSubject<Product[]>(null);


  constructor(private restService: RestService) { }

  getFullSearchResult(search:string) {
    this.searchSubject.next(search);
     this.restService.get<Product[]>(this.searchUrl, search).subscribe(
       products => this.searchProductsSubject.next(products),
           err => {
             console.log(err);
       });
  }
}
