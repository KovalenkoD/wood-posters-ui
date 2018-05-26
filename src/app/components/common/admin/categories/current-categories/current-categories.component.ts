import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../../../../../services/product-type.service";
import {AdminProductType} from "../../../../../model/admin/admin-product-type";

@Component({
  selector: 'app-current-categories',
  templateUrl: './current-categories.component.html',
  styleUrls: ['./current-categories.component.scss']
})
export class CurrentCategoriesComponent implements OnInit {

  adminProductTypes: AdminProductType[];
  adminProductType: AdminProductType;
  modify: boolean = false;
  deleteMessage: boolean = false;

  constructor(private productTypeService: ProductTypeService) { }

  ngOnInit() {
    this.productTypeService.getAllProductTypes().subscribe(data => this.adminProductTypes = data);
  }

  showCategory(adminProductType:AdminProductType){
    this.adminProductType = adminProductType;
  }

  modifyCategory(modify: boolean = true){
    this.modify = modify;
  }

  showDeleteMessage(deleteMessage: boolean = true){
    this.deleteMessage = deleteMessage;
  }

  deleteCategory () {
    this.productTypeService.deleteProductType(this.adminProductType);
    this.modifyCategory(false);
    this.showDeleteMessage(false);
    this.adminProductTypes = this.adminProductTypes.filter(adminProductType => adminProductType !== this.adminProductType);
    this.adminProductType = null;
  }

  updateCategory(){
    this.productTypeService.updateProductType(this.adminProductType);
    this.modifyCategory(false);
  }
}
