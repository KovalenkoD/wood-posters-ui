import { Component, OnInit, Input } from '@angular/core';
import {ProductTypeService} from "../../../services/product-type.service";
import { ProductType } from '../../../model/product-type';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private productService:ProductTypeService) { }

  productTypes: ProductType[];

  @Input() reverse: boolean;

  ngOnInit() {
    this.loadProductTypes()
  }

  loadProductTypes() {
  // Get all comments
    this.productService.getAllProductTypes()
      .subscribe(
        productTypes => this.productTypes = productTypes, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
    }
}
