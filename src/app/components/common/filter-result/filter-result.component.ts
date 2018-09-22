import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {FilterResultService} from "../../../services/filter-result.service";
import {ProductType} from "../../../model/product-type";


@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss'],
})
export class FilterResultComponent implements OnInit {

  @Input() products: Product[];

  @Input() productType: ProductType;

  ordering: string = '0';

  page: number = 1;

  constructor(private filterResultService: FilterResultService) { }

  ngOnInit() {
    this.filterResultService.orderCriteria.subscribe(ordering => {
     this.ordering = ordering;
    });

  }
}
