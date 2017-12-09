import { Component, OnInit, Input } from '@angular/core';
import {ProductType} from "../../../model/product-type";



@Component({
  selector: 'app-category-single',
  templateUrl: './category-single.component.html',
  styleUrls: ['./category-single.component.scss'],
})
export class CategorySingleComponent implements OnInit {

  constructor() { }

  @Input() productType: ProductType;

  ngOnInit() {
  }

}
