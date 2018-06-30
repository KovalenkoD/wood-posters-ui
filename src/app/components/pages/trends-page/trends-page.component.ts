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
  selectedFilterMaterials: number[] = [];
  selectedFilterColors: number[] = [];
  selectedFilterTechnology: number[] = [];

  constructor(private productService : ProductService, private filterResultService: FilterResultService) { }

  ngOnInit() {
    this.getMostPopularProductsByType()
    this.filterResultService.categoryFilters.subscribe(selectedFilterCategories => {
      this.selectedFilterCategories = selectedFilterCategories;
    });

    this.filterResultService.materialFilters.subscribe(selectedFilterMaterials => {
      this.selectedFilterMaterials = selectedFilterMaterials;
    });

    this.filterResultService.colorFilters.subscribe(selectedFilterColors => {
      this.selectedFilterColors = selectedFilterColors;
    });

    this.filterResultService.technologyFilters.subscribe(selectedFilterTechnology => {
      this.selectedFilterTechnology = selectedFilterTechnology;
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
    let filteredProducts = isNullOrUndefined(this.products) ? [] : this.products.filter(product => this.filterResultService.containsAny(this.selectedFilterCategories, product.categories));

    filteredProducts = filteredProducts.filter(product => this.filterResultService.containsAny(this.selectedFilterMaterials, product.materials));
    filteredProducts = filteredProducts.filter(product => this.filterResultService.containsAny(this.selectedFilterColors, product.productColors));
    filteredProducts = filteredProducts.filter(product => this.filterResultService.containsAny(this.selectedFilterTechnology, product.technologies));

    return filteredProducts;
  }

}
