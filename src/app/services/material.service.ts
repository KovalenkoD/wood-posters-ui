import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Material} from "../model/material";
import {AdminBaseNameObject} from "../model/admin/admin-base-name-object";

@Injectable()
export class MaterialService {

  private getAllMaterialsURL = 'http://localhost:8080/materials/getAllMaterials';
  private getAllMaterialsAdminURL = 'http://localhost:8080/materials/getAllMaterialsAdmin';
  private createMaterialURL = 'http://localhost:8080/materials/create';
  private updateMaterialURL = 'http://localhost:8080/materials/update';
  private deleteMaterialURL = 'http://localhost:8080/materials/delete';


  constructor(private http: HttpClient) { }


  getAllMaterials() : Observable<Material[]> {
    return this.http.get<Material[]>(this.getAllMaterialsURL, { withCredentials: true });

  }

  createMaterial(material:AdminBaseNameObject) : void {
    this.http.post(this.createMaterialURL, material, { withCredentials: true }).subscribe();
  }

  updateMaterial(material:AdminBaseNameObject) : void {
    this.http.post(this.updateMaterialURL, material, { withCredentials: true }).subscribe();
  }

  deleteMaterial(material:AdminBaseNameObject) : void {
    this.http.post(this.deleteMaterialURL, material, { withCredentials: true }).subscribe();
  }

  getAllMaterialsAdmin() : Observable<AdminBaseNameObject[]> {
    return this.http.get<AdminBaseNameObject[]>(this.getAllMaterialsAdminURL, { withCredentials: true });

  }

}
