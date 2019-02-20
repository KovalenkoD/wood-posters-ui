import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {SearchService} from "../../../services/search.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products: Product[];
  search: string;

  constructor(private searchService:SearchService) { }


  ngOnInit() {
    this.search = this.searchService.searchSubject.getValue();
    this.products = this.searchService.searchProductsSubject.getValue();
    this.searchService.searchProductsSubject.subscribe(products => {
      this.products = products;
    })
  }

  getFullSearchResult(lengthForSearch:number = 1) : void {
    if(this.search && this.search.length > lengthForSearch){
      this.searchService.getFullSearchResult(this.search);
    }
  }

}
