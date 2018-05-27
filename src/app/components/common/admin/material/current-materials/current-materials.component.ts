import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../../../../../services/product-type.service";
import {AdminProductType} from "../../../../../model/admin/admin-product-type";
import {AdminBaseNameObject} from "../../../../../model/admin/admin-base-name-object";
import {MaterialService} from "../../../../../services/material.service";

@Component({
  selector: 'app-current-materials',
  templateUrl: './current-materials.component.html',
  styleUrls: ['./current-materials.component.scss']
})
export class CurrentMaterialsComponent implements OnInit {

  adminBaseNameObjects: AdminBaseNameObject[];
  adminBaseNameObject: AdminBaseNameObject;
  modify: boolean = false;
  delete: boolean = false;

  constructor(private materialService: MaterialService) { }

  ngOnInit() {
    this.materialService.getAllMaterialsAdmin().subscribe(data => this.adminBaseNameObjects = data);
  }

  modifyMaterial(adminBaseNameObject: AdminBaseNameObject){
    this.adminBaseNameObject = adminBaseNameObject;
    this.modify = true;
  }

  deleteMaterialQuestion(deleteQuestion: boolean = true){
    this.delete = deleteQuestion;
  }

  deleteMaterial(){
    this.deleteMaterialQuestion(false);
    this.modify = false;
    this.materialService.deleteMaterial(this.adminBaseNameObject);
    this.adminBaseNameObjects = this.adminBaseNameObjects.filter(adminBaseNameObject => adminBaseNameObject !== this.adminBaseNameObject);
    this.adminBaseNameObject = null;
  }

  updateMaterial(): void{
    this.modify = false;
    this.materialService.updateMaterial(this.adminBaseNameObject);
  }



}
