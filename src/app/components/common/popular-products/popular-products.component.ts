import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss']
})


export class PopularProductsComponent implements OnInit {

  private products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getMostPopularProductsByType()
  }

  getMostPopularProductsByType() {
    this.productService.getMostPopularProductsByType(this.productService.popularType)
      .subscribe(
        products => this.products = products,
          err => {
          console.log(err);
        });
  }

}
