import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Material} from "../model/material";
import {AdminBaseNameObject} from "../model/admin/admin-base-name-object";
import {RestService} from "./rest.service";

@Injectable()
export class MaterialService {

  private getAllMaterialsURL = 'materials/getAllMaterials';
  private getAllMaterialsAdminURL = 'materials/getAllMaterialsAdmin';
  private createMaterialURL = 'materials/create';
  private updateMaterialURL = 'materials/update';
  private deleteMaterialURL = 'materials/delete';


  constructor(private restService: RestService) { }


  getAllMaterials() : Observable<Material[]> {
    return this.restService.get<Material[]>(this.getAllMaterialsURL);

  }

  createMaterial(material:AdminBaseNameObject) : void {
    this.restService.post(this.createMaterialURL, material).subscribe();
  }

  updateMaterial(material:AdminBaseNameObject) : void {
    this.restService.post(this.updateMaterialURL, material).subscribe();
  }

  deleteMaterial(material:AdminBaseNameObject) : void {
    this.restService.post(this.deleteMaterialURL, material).subscribe();
  }

  getAllMaterialsAdmin() : Observable<AdminBaseNameObject[]> {
    return this.restService.get<AdminBaseNameObject[]>(this.getAllMaterialsAdminURL);
  }

}
