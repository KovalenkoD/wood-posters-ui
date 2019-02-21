import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../services/product.service";
import {ScrollToConfigOptions, ScrollToService} from "@nicky-lenaers/ngx-scroll-to";
import {FilterResultService} from "../../../services/filter-result.service";

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss']
})


export class PopularProductsComponent implements OnInit {

  products: Product[];

  page: number = 1;

  constructor(private productService: ProductService, private scrollToService: ScrollToService) { }

  ngOnInit() {
    this.getMostPopularProductsByType();
    this.page = 1;
  }

  getMostPopularProductsByType() {
    this.productService.getMostPopularProductsByType(this.productService.popularType)
      .subscribe(
        products => this.products = products,
          err => {
          console.log(err);
        });
  }

  public pageChanges(event){
    this.page = event;
    this.triggerScrollToOffsetOnly(-9999);
  }

  public triggerScrollToOffsetOnly(offset: number = 0) {

    const config: ScrollToConfigOptions = {
      offset
    };

    this.scrollToService.scrollTo(config);
  }

}
