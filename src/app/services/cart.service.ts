import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  opened: boolean = false;

  constructor() { }

  openCart(){
    this.opened = true;
  }

  closeCart() {
    this.opened = false;
  }

}
