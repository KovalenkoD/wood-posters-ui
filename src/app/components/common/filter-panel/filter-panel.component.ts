import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  hiddenSection: boolean;

  constructor() { }

  ngOnInit() {
    this.hiddenSection = true;
  }

  showFilters (event) {
    this.hiddenSection = false;
  }

  onVoted(hide: boolean) {
    this.hiddenSection = hide;
  }

}
