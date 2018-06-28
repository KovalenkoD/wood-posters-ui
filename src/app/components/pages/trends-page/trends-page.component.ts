import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../services/product.service";
import {FilterResultService} from "../../../services/filter-result.service";
import {isNullOrUndefined} from "util";



@Component({
  selector: 'app-trends-page',
  templateUrl: './trends-page.component.html',
  styleUrls: ['./trends-page.component.scss']
})
export class TrendsPageComponent implements OnInit {

  products : Product[];

  selectedFilterCategories: number[] = [];

  constructor(private productService : ProductService, private filterResultService: FilterResultService) { }

  ngOnInit() {
    this.getMostPopularProductsByType()
    this.filterResultService.categoryFilters.subscribe(selectedFilterCategories => {
      this.selectedFilterCategories = selectedFilterCategories;
    });
  }

  getMostPopularProductsByType() {
    this.productService.getMostPopularProductsByType(this.productService.popularTypeInTrend)
      .subscribe(
        products => this.products = products,
        err => {
          console.log(err);
        });
  }

  getFilteredProductResult(){
    return isNullOrUndefined(this.products) ? [] : this.products.filter(product => this.filterResultService.containsAny(this.selectedFilterCategories, product.categories));
  }

}
