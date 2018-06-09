import { Injectable } from '@angular/core';
import {Technology} from "../model/technology";
import {Observable} from "rxjs/Observable";
import {AdminBaseNameObject} from "../model/admin/admin-base-name-object";
import {RestService} from "./rest.service";

@Injectable()
export class TechnologyService {

  private getAllTechnologiesURL = 'technology/getAllTechnologies';
  private getAllTechnologiesAdminURL = 'technology/getAllTechnologiesAdmin';
  private createTechnologyURL = 'technology/create';
  private updateTechnologyURL = 'technology/update';
  private deleteTechnologyURL = 'technology/delete';


  constructor(private restService: RestService) { }


  getAllTechnologies() : Observable<Technology[]> {
    return this.restService.get<Technology[]>(this.getAllTechnologiesURL);

  }

  createTechnology(technology:AdminBaseNameObject) : void {
    this.restService.post(this.createTechnologyURL, technology).subscribe();
  }

  updateTechnology(technology:AdminBaseNameObject) : void {
    this.restService.post(this.updateTechnologyURL, technology).subscribe();
  }

  deleteTechnology(technology:AdminBaseNameObject) : void {
    this.restService.post(this.deleteTechnologyURL, technology).subscribe();
  }

  getAllTechnologiesAdmin() : Observable<AdminBaseNameObject[]> {
    return this.restService.get<AdminBaseNameObject[]>(this.getAllTechnologiesAdminURL);

  }

}
