import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {SearchService} from "../../../services/search.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private products: Product[];
  search: string;

  constructor(private searchService:SearchService) { }


  ngOnInit() {
    this.products = [];
  }

  getFullSearchResult() : void {
    if(this.search && this.search.length > 2){
      this.searchService.getFullSearchResult(this.search)
        .subscribe(
          products => this.products = products,
          err => {
            console.log(err);
          });
    }
  }

}
