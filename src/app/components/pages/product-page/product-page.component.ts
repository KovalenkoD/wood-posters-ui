import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../model/product";

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

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.loadProductById(this.id);
    this.getRelatedProducts(this.id);
  }); }

  ngOnInit() {
  }

  loadProductById(id: number) {
    this.productService.getProductById(id)
      .subscribe(
        product => this.product = product,
        err => {
          console.log(err);
        });
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
