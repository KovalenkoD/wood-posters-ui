import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-trends-page',
  templateUrl: './trends-page.component.html',
  styleUrls: ['./trends-page.component.scss']
})
export class TrendsPageComponent implements OnInit {

  private products : Product[];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.getMostPopularProductsByType()
  }

  getMostPopularProductsByType() {
    this.productService.getMostPopularProductsByType(this.productService.popularTypeInTrend)
      .subscribe(
        products => this.products = products,
        err => {
          console.log(err);
        });
  }

}
