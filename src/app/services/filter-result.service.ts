import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class FilterResultService {
  public orderCriteria: EventEmitter<string> ;

  constructor() {
    this.orderCriteria = new EventEmitter();
  }

}
