import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent implements OnInit {

  @Input() hiddenSection: boolean;

  @Output() hiddenSectionChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  hideFilters(hide: boolean) {
      this.hiddenSectionChange.emit(hide);
  }
}
