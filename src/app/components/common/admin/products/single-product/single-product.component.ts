import { Component, OnInit } from '@angular/core';
import {AdminProduct} from "../../../../../model/admin/admin-product";
import {ProductService} from "../../../../../services/product.service";
import {FormControl} from "@angular/forms";
import {TechnologyService} from "../../../../../services/technology.service";
import {Technology} from "../../../../../model/technology";
import {MaterialService} from "../../../../../services/material.service";
import {Material} from "../../../../../model/material";
import {ProductColorService} from "../../../../../services/product.color.service";
import {ProductColor} from "../../../../../model/product-color";
import {AdminProductType} from "../../../../../model/admin/admin-product-type";
import {ProductTypeService} from "../../../../../services/product-type.service";
import {Category} from "../../../../../model/category";
import {CategoryService} from "../../../../../services/category.service";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  adminProduct: AdminProduct = new AdminProduct(-1, "" ,"" ,"" , 0, false, "25 x 25 x 25", [], "", "", "", [], -1, [], [], 0, 1, [], "", "", [], null, "");

  technologyForm = new FormControl();

  technologyList:Technology[];

  materialForm = new FormControl();

  materialList:Material[];

  productColorForm = new FormControl();

  productColorList:ProductColor[];

  categoryForm = new FormControl();

  categoryList:Category[];

  adminProductTypes: AdminProductType[];

  constructor(private productService: ProductService, private technologyService: TechnologyService, private materialService: MaterialService, private productColorService: ProductColorService, private productTypeService: ProductTypeService, private categoryService : CategoryService) { }

  ngOnInit() {
    this.technologyService.getAllTechnologies().subscribe(data => this.technologyList = data);
    this.materialService.getAllMaterials().subscribe(data => this.materialList = data);
    this.productTypeService.getAllProductTypes().subscribe(data => this.adminProductTypes = data);
    this.categoryService.getAllCategories().subscribe(data => this.categoryList = data);
    this.productColorService.getAllProductColors().subscribe(data => this.productColorList = data);
  }

  addGalleryImage() {
    this.adminProduct.images.push('');
  }

  removeGalleryImage() {
    this.adminProduct.images.pop();
  }

  createProduct() : void {
    this.adminProduct.technologyIDs = this.technologyForm.value;
    this.adminProduct.materialIDs = this.materialForm.value;
    this.adminProduct.productColorIDs = this.productColorForm.value;
    this.adminProduct.categoryIDs = this.categoryForm.value;
    this.productService.createProduct(this.adminProduct);
    this.adminProduct = new AdminProduct(-1, "" ,"" ,"" , 0, false, "25 x 25 x 25", [], "", "", "", [], -1, [], [], 0, 1, [], "", "", [], null, "");
  }

}
