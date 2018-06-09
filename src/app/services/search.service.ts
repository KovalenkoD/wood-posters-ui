import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Product} from "../model/product";

import {RestService} from "./rest.service";

@Injectable()
export class SearchService {

  private searchUrl = 'products/searchProduct';


  constructor(private restService: RestService) { }

  getFullSearchResult(search:string) : Observable<Product[]> {
    return this.restService.get(this.searchUrl, search);
  }
}
