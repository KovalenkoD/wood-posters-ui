import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../../../../../services/product-type.service";
import {AdminProductType} from "../../../../../model/admin/admin-product-type";
import {CategoryService} from "../../../../../services/category.service";
import {AdminBaseNameObject} from "../../../../../model/admin/admin-base-name-object";

@Component({
  selector: 'app-current-types',
  templateUrl: './current-types.component.html',
  styleUrls: ['./current-types.component.scss']
})
export class CurrentTypesComponent implements OnInit {

  adminBaseNameObjects: AdminBaseNameObject[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategoriesAdmin().subscribe(data => this.adminBaseNameObjects = data);
  }



}
