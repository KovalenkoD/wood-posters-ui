import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../model/product";
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import {isNullOrUndefined} from "util";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product : Product;
  products : Product[];
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private productService: ProductService, private scrollToService: ScrollToService) {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.loadProductById(this.id);
    this.getRelatedProducts(this.id);
  }); }

  ngOnInit() {
  }

  public triggerScrollToProductPageContainer() {

    const config: ScrollToConfigOptions = {
      target: 'product-page-container'
    };

    this.scrollToService.scrollTo(config);
  }

  loadProductById(id: number) {
    this.productService.getProductById(id)
      .subscribe(
        product => {
          if(!isNullOrUndefined(this.product)){
            this.triggerScrollToOffsetOnly(-9999);
          }
          this.product = product;},
      err => {
          console.log(err);
        });
  }

  public triggerScrollToOffsetOnly(offset: number = 0) {

    const config: ScrollToConfigOptions = {
      offset
    };

    this.scrollToService.scrollTo(config);
  }

  getRelatedProducts(id:number) {
    this.productService.getRelatedProducts(id)
      .subscribe(
        products => this.products = products,
        err => {
          console.log(err);
        });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
