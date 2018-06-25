import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class FilterResultService {
  public orderCriteria: EventEmitter<string> ;
  public clearFilters: EventEmitter<boolean> ;
  public categoryFilters: EventEmitter<number[]> ;

  constructor() {
    this.orderCriteria = new EventEmitter();
    this.categoryFilters = new EventEmitter();
    this.clearFilters = new EventEmitter();
  }

  public containsAny(selectedItems, itemsInProduct): boolean {
    return selectedItems.length == 0 || itemsInProduct.filter(item => selectedItems.indexOf(item.id) != -1).length > 0;
  }

}
