import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Product} from "../model/product";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {

  private searchUrl = 'http://localhost:8080/products/searchProduct';


  constructor(private http: Http) { }


  getFullSearchResult(search:string) : Observable<Product[]> {
    return this.http.get(this.searchUrl + "/" + search)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
