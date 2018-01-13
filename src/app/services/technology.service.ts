import { Injectable } from '@angular/core';
import {Technology} from "../model/technology";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TechnologyService {

  private getAllTechnologiesURL = 'http://localhost:8080/technology/getAllTechnologies';


  constructor(private http: HttpClient) { }


  getAllTechnologies() : Observable<Technology[]> {
    return this.http.get<Technology[]>(this.getAllTechnologiesURL, { withCredentials: true });

  }

}
