import { Component, OnInit } from '@angular/core';
import {AdminBaseNameObject} from "../../../../../model/admin/admin-base-name-object";
import {MaterialService} from "../../../../../services/material.service";
import {CategoryService} from "../../../../../services/category.service";

@Component({
  selector: 'app-single-type',
  templateUrl: './single-type.component.html',
  styleUrls: ['./single-type.component.scss']
})
export class SingleTypeComponent implements OnInit {

  adminBaseNameObject: AdminBaseNameObject = new AdminBaseNameObject(-1, "" ,"" ,"");

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  createOrUpdateCategory(id:number) : void {
    console.log(this.adminBaseNameObject);
    if(id == -1){
      this.categoryService.createCategory(this.adminBaseNameObject);
      this.adminBaseNameObject = new AdminBaseNameObject(-1, "" ,"" ,"");
    } else {

    }
  }

}
