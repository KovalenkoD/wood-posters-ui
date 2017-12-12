import { Component, OnInit, Input } from '@angular/core';
import {ProductTypeService} from "../../../services/product-type.service";
import { ProductType } from '../../../model/product-type';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private productTypeService:ProductTypeService) { }

  productTypes: ProductType[];

  @Input() reverse: boolean;

  ngOnInit() {
    this.loadProductTypes()
  }

  loadProductTypes() {
    this.productTypeService.getAllVisibleProductTypes()
      .subscribe(
        productTypes => this.productTypes = productTypes,
        err => {
          console.log(err);
        });
    }
}
