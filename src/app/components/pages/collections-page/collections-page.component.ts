import { Component, OnInit } from '@angular/core';
import {Bundle} from "../../../model/bundle";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-collections-page',
  templateUrl: './collections-page.component.html',
  styleUrls: ['./collections-page.component.scss']
})
export class CollectionsPageComponent implements OnInit {

  collections: Bundle[];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.getAllBundles();
  }

  getAllBundles() {
    this.productService.getAllBundles()
      .subscribe(
        collections => this.collections = collections,
        err => {
          console.log(err);
        });
  }

}
