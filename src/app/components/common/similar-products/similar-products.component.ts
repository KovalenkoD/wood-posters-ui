import { Component, OnInit } from '@angular/core';

export interface Product {
 name?: string,
 price?: string,
 category?: string,
 image?: string,
 link: string,
 background: string
}

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss']
})
export class SimilarProductsComponent implements OnInit {

  constructor() { }

  products: Product[] = [];

  ngOnInit() {
  }

}
