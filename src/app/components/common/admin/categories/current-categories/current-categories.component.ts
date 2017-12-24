import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../../../../../services/product-type.service";
import {AdminProductType} from "../../../../../model/admin/admin-product-type";

@Component({
  selector: 'app-current-categories',
  templateUrl: './current-categories.component.html',
  styleUrls: ['./current-categories.component.scss']
})
export class CurrentCategoriesComponent implements OnInit {

  adminProductTypes: AdminProductType[];

  constructor(private productTypeService: ProductTypeService) { }

  ngOnInit() {
    this.productTypeService.getAllProductTypes().subscribe(data => this.adminProductTypes = data);
  }



}
