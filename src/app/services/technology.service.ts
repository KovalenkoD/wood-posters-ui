import { Injectable } from '@angular/core';
import {Technology} from "../model/technology";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {AdminBaseNameObject} from "../model/admin/admin-base-name-object";

@Injectable()
export class TechnologyService {

  private getAllTechnologiesURL = 'http://localhost:8080/technology/getAllTechnologies';
  private getAllTechnologiesAdminURL = 'http://localhost:8080/technology/getAllTechnologiesAdmin';
  private createTechnologyURL = 'http://localhost:8080/technology/create';
  private updateTechnologyURL = 'http://localhost:8080/technology/update';
  private deleteTechnologyURL = 'http://localhost:8080/technology/delete';


  constructor(private http: HttpClient) { }


  getAllTechnologies() : Observable<Technology[]> {
    return this.http.get<Technology[]>(this.getAllTechnologiesURL, { withCredentials: true });

  }

  createTechnology(technology:AdminBaseNameObject) : void {
    this.http.post(this.createTechnologyURL, technology, { withCredentials: true }).subscribe();
  }

  updateTechnology(technology:AdminBaseNameObject) : void {
    this.http.post(this.updateTechnologyURL, technology, { withCredentials: true }).subscribe();
  }

  deleteTechnology(technology:AdminBaseNameObject) : void {
    this.http.post(this.deleteTechnologyURL, technology, { withCredentials: true }).subscribe();
  }

  getAllTechnologiesAdmin() : Observable<AdminBaseNameObject[]> {
    return this.http.get<AdminBaseNameObject[]>(this.getAllTechnologiesAdminURL, { withCredentials: true });

  }

}
