import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../../../model/category";
import {CategoryService} from "../../../services/category.service";
import {FilterResultService} from "../../../services/filter-result.service";


@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent implements OnInit {

  @Input() hiddenSection: boolean;

  @Output() hiddenSectionChange = new EventEmitter<boolean>();

  categoryList:Category[];
  categoryLimit: number = 4;

  constructor(private categoryService : CategoryService, private filterResultService: FilterResultService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(data => this.categoryList = data);
    this.filterResultService.clearFilters.subscribe(data => {
      if(data){
        this.clear();
      }
    });

  }

  hideFilters(hide: boolean) {
      this.hiddenSectionChange.emit(hide);
   // this.categoryLimit = 4;
  }

  clear(){
    this.categoryList.forEach(category => {category.checked = false});
    this.filterResultService.categoryFilters.next([]);

  }

  getSelectedItemsLength(listOfItems) : number {
    return this.getSelectedItems(listOfItems).length;
  }

  getSelectedItems(listOfItems) : any[] {
    return listOfItems ? listOfItems.filter(item => item.checked) : [];
  }

  showMoreCategories(){
    this.categoryLimit = 999;
  }

  onChange(event, index, item) {
    item.checked = !item.checked;
    this.filterResultService.categoryFilters.next(this.getSelectedCategoriesIds());
  }

  getSelectedCategoriesIds(): number[] {
    let selectedFilterCategoriesIDs = [];
    let selectedFilterCategories = this.getSelectedItems(this.categoryList);
    selectedFilterCategories.forEach(category => {selectedFilterCategoriesIDs.push(category.id)});
    return selectedFilterCategoriesIDs;
  }
}
