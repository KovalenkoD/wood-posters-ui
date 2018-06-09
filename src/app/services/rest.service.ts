import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RestService {
  serverUrl = environment.serverUrl;

  constructor(private http: HttpClient) { }

  get<T>(url, parameter: any = '') : Observable<T>{
    return this.http.get<T>(this.serverUrl + url + "/" + parameter, { withCredentials: true });
  }

  post<T>(url, parameter) : Observable<T>{
    return this.http.post<T>(this.serverUrl + url, parameter, { withCredentials: true });
  }
}
