import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product";

/*export interface Product {
 name?: string,
 price?: string,
 category?: string,
 image?: string,
 link: string,
 background: string
}*/

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss'],
})
export class FilterResultComponent implements OnInit {

  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }
}
