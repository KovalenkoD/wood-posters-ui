import { Component, OnInit, Input } from '@angular/core';

export interface Product {
  name?: string,
  price?: string,
  category?: string,
  image?: string
}

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
