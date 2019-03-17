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
import {Bundle} from "../../../../../model/bundle";
import {BundleChild} from "../../../../../model/bundle-child";
import {ProductType} from "../../../../../model/product-type";
import {Product} from "../../../../../model/product";
import {AdminBundleProductItem} from "../../../../../model/admin/admin-bundle-product-item";

@Component({
  selector: 'app-single-collection',
  templateUrl: './single-collection.component.html',
  styleUrls: ['./single-collection.component.scss']
})
export class SingleCollectionComponent implements OnInit {

  adminProduct: AdminProduct = new AdminProduct(-1, "" ,"" ,"" , 0, false, "25 x 25 x 25", [], "", "", "", [], -1,[], [], 0, 1, [], "", "", [], null, "", 1);

  bundleChild: [BundleChild] = [] as [BundleChild];

  /*
  https://walldeco.ua/img/for_page/poster5.jpg*/



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

  addProductToBundle() {
    let product = new Product(-1, null, null, null, null, null, null, null, null, null, null, null, null,null,null, new Date());
    this.bundleChild.push(new BundleChild(-1, 13, 21, product, false));
  }

  removeProductFromBundle() {
    this.bundleChild.pop();
  }

  createOrUpdateProduct(id:number) : void {
    console.log(this.adminProduct);
    this.adminProduct.technologyIDs = this.technologyForm.value;
    this.adminProduct.materialIDs = this.materialForm.value;
    this.adminProduct.productColorIDs = this.productColorForm.value;
    this.adminProduct.categoryIDs = this.categoryForm.value;
    if(id == -1){
        this.adminProduct.bundleProductItems = this.convertBundleChildToBundleAdminProductItem();
        console.log(this.adminProduct);
        this.productService.createBundle(this.adminProduct);
        this.adminProduct = new AdminProduct(-1, "" ,"" ,"" , 0, false, "25 x 25 x 25", [], "", "", "", [], -1, [],[], 0, 1, [], "", "", [], null, "", 1);
    } else {

    }
  }
  convertBundleChildToBundleAdminProductItem(){
    let adminProductCategoryLigthItems = [] as AdminBundleProductItem[];

    this.bundleChild.forEach(child => {
      adminProductCategoryLigthItems.push(new AdminBundleProductItem(child.id, child.x_coordinate, child.y_coordinate, child.product.id));
    });
    return adminProductCategoryLigthItems;
  }

  onToggleHint(target: any): void {
    if(target.active === true) {
      target.active = !target.active;
    } else {
      this.bundleChild.forEach((elem: any)=>{
        elem.active = false;
      });
      target.active = !target.active;
    }
  }

  isActive(target: any): boolean {
    if(target.active && target.active === true) {
      return true;
    } else {
      return false;
    }
  }

  getPosition(target:BundleChild) : any{
    let postition = {
      left: target.x_coordinate + '%',
      top: target.y_coordinate + '%'
    };
    return postition;
  }

  productIdChanged(productId : number, childItem: BundleChild){
    this.productService.getProductById(productId).subscribe(product => {
      childItem.product = product;
      this.bundleChild.forEach(childFromBundleItem => {

        console.log(productId + " | " + childFromBundleItem.id + " | " + childFromBundleItem.product.id + " | " + childFromBundleItem.product.name);
      });
    });



  }
}
