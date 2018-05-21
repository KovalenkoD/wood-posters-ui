import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductTypeService} from "../../../services/product-type.service";
import {Product} from "../../../model/product";
import {Category} from "../../../model/category";
import {ProductType} from "../../../model/product-type";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  private products: Product[];
  private productType: ProductType;

  constructor(private route: ActivatedRoute, private productTypeService:ProductTypeService) {}

  ngOnInit() {
    this.products = [];
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.loadProductTypes(this.id);
      this.loadProductTypeById(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadProductTypes(id: number) {
    this.productTypeService.getProductByTypeId(id)
      .subscribe(
        products => this.products = products,
        err => {
          console.log(err);
        });
  }

  loadProductTypeById(id: number) {
    this.productTypeService.getProductTypeById(id)
      .subscribe(
        productType => this.productType = productType,
        err => {
          console.log(err);
        });
  }
}
