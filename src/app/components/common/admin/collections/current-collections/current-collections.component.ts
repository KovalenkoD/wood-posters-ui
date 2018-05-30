import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../../../../../services/product-type.service";
import {AdminProductType} from "../../../../../model/admin/admin-product-type";

@Component({
  selector: 'app-current-collections',
  templateUrl: './current-collections.component.html',
  styleUrls: ['./current-collections.component.scss']
})
export class CurrentCollectionsComponent implements OnInit {

  adminProductTypes: AdminProductType[];

  constructor(private productTypeService: ProductTypeService) { }

  ngOnInit() {
    this.productTypeService.getAllProductTypes().subscribe(data => this.adminProductTypes = data);
  }



}
