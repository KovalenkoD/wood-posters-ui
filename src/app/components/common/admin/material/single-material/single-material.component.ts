import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../../../../../services/product-type.service";
import {AdminBaseNameObject} from "../../../../../model/admin/admin-base-name-object";
import {MaterialService} from "../../../../../services/material.service";

@Component({
  selector: 'app-single-material',
  templateUrl: './single-material.component.html',
  styleUrls: ['./single-material.component.scss']
})
export class SingleMaterialComponent implements OnInit {

  adminBaseNameObject: AdminBaseNameObject = new AdminBaseNameObject(-1, "" ,"" ,"");

  constructor(private materialService: MaterialService) { }

  ngOnInit() {
  }

  createOrUpdateCategory(id:number) : void {
    console.log(this.adminBaseNameObject);
    if(id == -1){
      this.materialService.createMaterial(this.adminBaseNameObject);
      this.adminBaseNameObject = new AdminBaseNameObject(-1, "" ,"" ,"");
    } else {

    }
  }

}
