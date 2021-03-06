import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductTypeService} from "../../../services/product-type.service";
import {Product} from "../../../model/product";
import {Category} from "../../../model/category";
import {ProductType} from "../../../model/product-type";
import {FilterResultService} from "../../../services/filter-result.service";
import {LigthProduct} from "../../../model/ligth-product"
import {isNullOrUndefined} from "util";



@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  products: Product[];
  productType: ProductType;

  filteredProducts: Product[] = [];
  selectedFilterCategories: number[] = [];
  selectedFilterMaterials: number[] = [];
  selectedFilterColors: number[] = [];
  selectedFilterTechnology: number[] = [];


  constructor(private route: ActivatedRoute, private productTypeService:ProductTypeService, private filterResultService: FilterResultService) {}

  ngOnInit() {
    this.products = [];
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      let currentCategory = this.filterResultService.selectedCategory.getValue();
      if(!isNullOrUndefined(currentCategory) && currentCategory != this.id){
        this.filterResultService.clearFilters.next(true);
      } else {
        this.filterResultService.clearFilters.next(false);
      }
      this.filterResultService.selectedCategory.next(this.id);
      this.loadProductTypes(this.id);
      this.loadProductTypeById(this.id);
    });

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

  getFilteredProductResult(){
    this.filteredProducts = this.products.filter(product => this.filterResultService.containsAny(this.selectedFilterCategories, product.categories));
    this.filteredProducts = this.filteredProducts.filter(product => this.filterResultService.containsAny(this.selectedFilterMaterials, product.materials));
    this.filteredProducts = this.filteredProducts.filter(product => this.filterResultService.containsAny(this.selectedFilterColors, product.productColors));
    this.filteredProducts = this.filteredProducts.filter(product => this.filterResultService.containsAny(this.selectedFilterTechnology, product.technologies));

    return this.filteredProducts;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadProductTypes(id: number) {
    this.productTypeService.getProductByTypeId(id)
      .subscribe(
      ligthProducts => {
          let products : Product[] = [];
          ligthProducts.forEach(ligthProduct => {
            products.push(this.convertToProduct(ligthProduct));
          });
          this.products = products},
        err => {
          console.log(err);
        });
  }

  convertToProduct(ligtProduct): Product {
    return new Product(ligtProduct.id, ligtProduct.nm, ligtProduct.sz, ligtProduct.ig, ligtProduct.pr, "", null, ligtProduct.tg, ligtProduct.cg,
      ligtProduct.ml, ligtProduct.pc, null, 0, ligtProduct.bg, "" , ligtProduct.cd)
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
