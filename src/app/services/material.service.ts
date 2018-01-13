import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Material} from "../model/material";

@Injectable()
export class MaterialService {

  private getAllMaterialsURL = 'http://localhost:8080/materials/getAllMaterials';


  constructor(private http: HttpClient) { }


  getAllMaterials() : Observable<Material[]> {
    return this.http.get<Material[]>(this.getAllMaterialsURL, { withCredentials: true });

  }
}
