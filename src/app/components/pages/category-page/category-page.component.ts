import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductTypeService} from "../../../services/product-type.service";
import {Product} from "../../../model/product";
import {Category} from "../../../model/category";
import {ProductType} from "../../../model/product-type";
import {FilterResultService} from "../../../services/filter-result.service";


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  private products: Product[];
  private productType: ProductType;

  filteredProducts: Product[] = [];
  selectedFilterCategories: number[] = [];


  constructor(private route: ActivatedRoute, private productTypeService:ProductTypeService, private filterResultService: FilterResultService) {}

  ngOnInit() {
    this.products = [];
    this.sub = this.route.params.subscribe(params => {
      this.filterResultService.clearFilters.next(true);
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.loadProductTypes(this.id);
      this.loadProductTypeById(this.id);
    });

    this.filterResultService.categoryFilters.subscribe(selectedFilterCategories => {
      this.selectedFilterCategories = selectedFilterCategories;
    });

  }

  getFilteredProductResult(){
    this.filteredProducts = this.products.filter(product => this.filterResultService.containsAny(this.selectedFilterCategories, product.categories));
    return this.filteredProducts;
  }



  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadProductTypes(id: number) {
    this.productTypeService.getProductByTypeId(id)
      .subscribe(
        products => this.products = products,
        err => {
          console.log(err);
        });
  }

  loadProductTypeById(id: number) {
    this.productTypeService.getProductTypeById(id)
      .subscribe(
        productType => this.productType = productType,
        err => {
          console.log(err);
        });
  }
}
