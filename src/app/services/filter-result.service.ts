import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable()
export class FilterResultService {
  public orderCriteria: EventEmitter<string> ;
  public clearFilters: EventEmitter<boolean> ;
  public categoryFilters: EventEmitter<number[]> ;
  public materialFilters: EventEmitter<number[]> ;
  public colorFilters: EventEmitter<number[]> ;
  public technologyFilters: EventEmitter<number[]> ;
  public selectedItems:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public removeFilter: Subject<any> = new Subject<any[]>();
  constructor() {
    this.orderCriteria = new EventEmitter();
    this.categoryFilters = new EventEmitter();
    this.materialFilters = new EventEmitter();
    this.colorFilters = new EventEmitter();
    this.technologyFilters = new EventEmitter();
    this.clearFilters = new EventEmitter();
  }

  public containsAny(selectedItems, itemsInProduct): boolean {
    return selectedItems.length == 0 || itemsInProduct.filter(item => selectedItems.indexOf(item.id) != -1).length > 0;
  }

}
