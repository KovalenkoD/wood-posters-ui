import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductType} from "../../../model/product-type";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss'],
})
export class ProductSingleComponent implements OnInit {

  constructor() { }

  @Input() product: Product;

  @Input() productType: ProductType;

  ngOnInit() {
  }

  getProductTypeName(){
    if(!isNullOrUndefined(this.productType)){ return this.productType.name}
    else if(!isNullOrUndefined(this.product) && !isNullOrUndefined(this.product.productType)){
      return this.product.productType.name;
    }
  }

}
