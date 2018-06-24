import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class FilterResultService {
  public orderCriteria: EventEmitter<number> ;

  constructor() {
    this.orderCriteria = new EventEmitter();
  }

}
