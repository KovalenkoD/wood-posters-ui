import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../../../../../services/product-type.service";
import {AdminProductType} from "../../../../../model/admin/admin-product-type";
import {AdminProduct} from "../../../../../model/admin/admin-product";
import {Category} from "../../../../../model/category";
import {CategoryService} from "../../../../../services/category.service";
import {TechnologyService} from "../../../../../services/technology.service";
import {MaterialService} from "../../../../../services/material.service";
import {Material} from "../../../../../model/material";
import {Technology} from "../../../../../model/technology";
import {ProductService} from "../../../../../services/product.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-current-products',
  templateUrl: './current-products.component.html',
  styleUrls: ['./current-products.component.scss']
})
export class CurrentProductsComponent implements OnInit {

  productId: number;

  initDependentItemsDone: boolean = false;

  adminProduct: AdminProduct;

  technologyForm = new FormControl();

  technologyList:Technology[];

  materialForm = new FormControl();

  materialList:Material[];

  categoryForm = new FormControl();

  categoryList:Category[];

  adminProductTypes: AdminProductType[];

  constructor(private productService: ProductService, private technologyService: TechnologyService, private materialService: MaterialService, private productTypeService: ProductTypeService, private categoryService : CategoryService) { }

  ngOnInit() {}

  addGalleryImage() {
    this.adminProduct.images.push('');
  }

  removeGalleryImage() {
    this.adminProduct.images.pop();
  }

  searchProduct(productId: number){
    if(productId > 0){
      if(!this.initDependentItemsDone){
        this.technologyService.getAllTechnologies().subscribe(data => this.technologyList = data);
        this.materialService.getAllMaterials().subscribe(data => this.materialList = data);
        this.productTypeService.getAllProductTypes().subscribe(data => this.adminProductTypes = data);
        this.categoryService.getAllCategories().subscribe(data => this.categoryList = data);
        this.initDependentItemsDone = true;
      }

      this.productService.getAdminProductById(productId).subscribe(adminProduct => {
        this.adminProduct = adminProduct;
        this.technologyForm.setValue(this.adminProduct.technologyIDs);
        this.materialForm.setValue(this.adminProduct.materialIDs);
        this.categoryForm.setValue(this.adminProduct.categoryIDs);
      });
    }
  }

  updateProduct() : void {
    this.adminProduct.technologyIDs = this.technologyForm.value;
    this.adminProduct.materialIDs = this.materialForm.value;
    this.adminProduct.categoryIDs = this.categoryForm.value;

    this.productService.updateProduct(this.adminProduct);
    this.adminProduct = null;
  }

  cancelUpdate() : void {
    this.adminProduct = null;
  }


}
