import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../../model/product-type";

@Component({
  selector: 'app-categories-result',
  templateUrl: './categories-result.component.html',
  styleUrls: ['./categories-result.component.scss'],
})
export class CategoriesResultComponent implements OnInit {

  @Input() productTypes: ProductType[];

  constructor() { }

  ngOnInit() {
  }
}
