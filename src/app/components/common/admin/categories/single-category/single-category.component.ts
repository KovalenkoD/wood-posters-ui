import { Component, OnInit } from '@angular/core';
import {AdminProductType} from "../../../../../model/admin/admin-product-type";
import {ProductTypeService} from "../../../../../services/product-type.service";

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {

  adminProductType: AdminProductType = new AdminProductType(-1, "" ,"" ,"" ,"");

  constructor(private productTypeService: ProductTypeService) { }

  ngOnInit() {
  }

  createCategory() : void {
    this.productTypeService.createProductType(this.adminProductType);
    this.adminProductType =  new AdminProductType(-1, "" ,"" ,"" ,"");
  }

}
