import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../../../../../services/product-type.service";
import {AdminBaseNameObject} from "../../../../../model/admin/admin-base-name-object";
import {ProductColorService} from "../../../../../services/product.color.service";

@Component({
  selector: 'app-single-color',
  templateUrl: './single-color.component.html',
  styleUrls: ['./single-color.component.scss']
})
export class SingleColorComponent implements OnInit {

  adminBaseNameObject: AdminBaseNameObject = new AdminBaseNameObject(-1, "" ,"" ,"");

  constructor(private materialService: ProductColorService) { }

  ngOnInit() {
  }

  createProductColor() : void {
    this.materialService.createProductColor(this.adminBaseNameObject);
    this.adminBaseNameObject = new AdminBaseNameObject(-1, "" ,"" ,"");
  }

}
