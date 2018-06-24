import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../model/product";

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss'],
})
export class ProductSingleComponent implements OnInit {

  constructor() { }

  @Input() product: Product;

  ngOnInit() {
  }

}
