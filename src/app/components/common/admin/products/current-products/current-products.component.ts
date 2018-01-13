import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../../../../../services/product-type.service";
import {AdminProductType} from "../../../../../model/admin/admin-product-type";

@Component({
  selector: 'app-current-products',
  templateUrl: './current-products.component.html',
  styleUrls: ['./current-products.component.scss']
})
export class CurrentProductsComponent implements OnInit {

  adminProductTypes: AdminProductType[];

  constructor(private productTypeService: ProductTypeService) { }

  ngOnInit() {
    this.productTypeService.getAllProductTypes().subscribe(data => this.adminProductTypes = data);
  }



}
