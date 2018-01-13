import { Component, OnInit } from '@angular/core';
import {AdminProduct} from "../../../../../model/admin/admin-product";
import {ProductService} from "../../../../../services/product.service";
import {FormControl} from "@angular/forms";
import {TechnologyService} from "../../../../../services/technology.service";
import {Technology} from "../../../../../model/technology";
import {MaterialService} from "../../../../../services/material.service";
import {Material} from "../../../../../model/material";
import {AdminProductType} from "../../../../../model/admin/admin-product-type";
import {ProductTypeService} from "../../../../../services/product-type.service";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  adminProduct: AdminProduct = new AdminProduct(-1, "" ,"" ,"" , 0, false, "25 x 25 x 25", [], "", "", "", [5], -1, [], 0, 1, [], "");

  technologyForm = new FormControl();

  technologyList:Technology[];

  materialForm = new FormControl();

  materialList:Material[];

  adminProductTypes: AdminProductType[];

  constructor(private productService: ProductService, private technologyService: TechnologyService, private materialService: MaterialService, private productTypeService: ProductTypeService) { }

  ngOnInit() {
    this.technologyService.getAllTechnologies().subscribe(data => this.technologyList = data);
    this.materialService.getAllMaterials().subscribe(data => this.materialList = data);
    this.productTypeService.getAllProductTypes().subscribe(data => this.adminProductTypes = data);

  }

  createOrUpdateProduct(id:number) : void {
    console.log(this.adminProduct);
    this.adminProduct.technologyIDs = this.technologyForm.value;
    this.adminProduct.materialIDs = this.materialForm.value;
    if(id == -1){
      this.productService.createProduct(this.adminProduct);
    } else {

    }
  }

}
