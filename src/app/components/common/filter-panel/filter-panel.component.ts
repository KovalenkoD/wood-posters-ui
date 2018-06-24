import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../model/product";
import {FilterResultService} from "../../../services/filter-result.service";

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @Input() productSize: number = 0;
  @Input() categoryName: string = '';

  @Input() showProductAndCategoriesLabel: boolean = true;

  ordering: string;

  hiddenSection: boolean;

  constructor(private filterResultService: FilterResultService) { }

  ngOnInit() {
    this.hiddenSection = true;
  }

  showFilters (event) {
    this.hiddenSection = false;
  }

  changeOrdering(){
    this.filterResultService.orderCriteria.next(this.ordering);
  }
}
