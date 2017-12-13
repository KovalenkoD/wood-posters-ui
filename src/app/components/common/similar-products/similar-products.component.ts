import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product";

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss']
})
export class SimilarProductsComponent implements OnInit {

  @Input() products : Product[];

  constructor() { }

  ngOnInit() {
  }
}
