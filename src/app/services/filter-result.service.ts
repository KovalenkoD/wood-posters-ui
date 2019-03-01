import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable()
export class FilterResultService {
  public orderCriteria: BehaviorSubject<string> = new BehaviorSubject(null) ;
  public clearFilters: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public categoryFilters: BehaviorSubject<number[]> = new BehaviorSubject([]);
  public materialFilters: BehaviorSubject<number[]> = new BehaviorSubject([]);
  public colorFilters: BehaviorSubject<number[]> = new BehaviorSubject([]) ;
  public technologyFilters: BehaviorSubject<number[]> = new BehaviorSubject([]);
  public selectedItems:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public removeFilter: Subject<any> = new Subject<any[]>();
  public selectedCategory: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  constructor() {
  }

  public containsAny(selectedItems, itemsInProduct): boolean {
    return selectedItems.length == 0 || itemsInProduct.filter(item => selectedItems.indexOf(item.id) != -1).length > 0;
  }

}
