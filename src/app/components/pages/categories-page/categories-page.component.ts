import { Component, OnInit} from '@angular/core';
import {ProductTypeService} from "../../../services/product-type.service";
import {ProductType} from "../../../model/product-type";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

  productTypes: ProductType[];

  constructor(private productTypeService:ProductTypeService) {}

  ngOnInit() {
    this.loadProductTypes()
  }

  loadProductTypes() {
    this.productTypeService.getAllVisibleProductTypes()
      .subscribe(
        productTypes => this.productTypes = productTypes,
        err => {
          console.log(err);
        });
  }
}
