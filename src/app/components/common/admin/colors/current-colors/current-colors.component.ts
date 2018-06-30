import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../../../../../services/product-type.service";
import {AdminProductType} from "../../../../../model/admin/admin-product-type";
import {AdminBaseNameObject} from "../../../../../model/admin/admin-base-name-object";
import {ProductColorService} from "../../../../../services/product.color.service";

@Component({
  selector: 'app-current-colors',
  templateUrl: './current-colors.component.html',
  styleUrls: ['./current-colors.component.scss']
})
export class CurrentColorsComponent implements OnInit {

  adminBaseNameObjects: AdminBaseNameObject[];
  adminBaseNameObject: AdminBaseNameObject;
  modify: boolean = false;
  delete: boolean = false;

  constructor(private materialService: ProductColorService) { }

  ngOnInit() {
    this.materialService.getAllProductColorsAdmin().subscribe(data => this.adminBaseNameObjects = data);
  }

  modifyProductColor(adminBaseNameObject: AdminBaseNameObject){
    this.adminBaseNameObject = adminBaseNameObject;
    this.modify = true;
  }

  deleteProductColorQuestion(deleteQuestion: boolean = true){
    this.delete = deleteQuestion;
  }

  deleteProductColor(){
    this.deleteProductColorQuestion(false);
    this.modify = false;
    this.materialService.deleteProductColor(this.adminBaseNameObject);
    this.adminBaseNameObjects = this.adminBaseNameObjects.filter(adminBaseNameObject => adminBaseNameObject !== this.adminBaseNameObject);
    this.adminBaseNameObject = null;
  }

  updateProductColor(): void{
    this.modify = false;
    this.materialService.updateProductColor(this.adminBaseNameObject);
  }



}
