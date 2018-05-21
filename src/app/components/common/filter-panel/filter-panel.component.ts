import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../model/product";

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @Input() productSize: number = 0;
  @Input() categoryName: string = '';

  hiddenSection: boolean;

  constructor() { }

  ngOnInit() {
    this.hiddenSection = true;
  }

  showFilters (event) {
    this.hiddenSection = false;
  }
}
