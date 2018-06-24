import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {FilterResultService} from "../../../services/filter-result.service";


@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss'],
})
export class FilterResultComponent implements OnInit {

  @Input() products: Product[];

  ordering: string = '0';

  page: number = 1;

  constructor(private filterResultService: FilterResultService) { }

  ngOnInit() {
    this.filterResultService.orderCriteria.subscribe(ordering => {
     this.ordering = ordering;
    });

  }
}
