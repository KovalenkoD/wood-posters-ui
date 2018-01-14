import { Component, OnInit } from '@angular/core';
import {CartResult} from "../../../../model/cart-result";
import {CartService} from "../../../../services/cart.service";
import {Product} from "../../../../model/product";
import {CartItem} from "../../../../model/cart-item";



@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {

  cartResult:CartResult;

  constructor(private cartService: CartService) {
    cartService.cartResultChanges.subscribe(cartResult => this.cartResult = cartResult);

  }


  ngOnInit() {
    this.cartService.getSalesOrderInfo();
  }

  deleteItem(product:Product): void {
    this.cartService.deleteProductFromCart(product);
  }

  cleanCart(): void {
    this.cartService.cleanCart();
  }

  isMinusDisabled(cartItem: CartItem) : boolean {
    return cartItem.count <= 1;
  }

  changeProductCountMinus(cartItem: CartItem) : void {
    let newCount = cartItem.count - 1;
    this.changeProductCount(cartItem.product, newCount);
  }

  changeProductCountPlus(cartItem: CartItem) : void {
    let newCount = cartItem.count + 1;
    this.changeProductCount(cartItem.product, newCount);
  }

  changeProductCount(product:Product, count: number) : void {
    this.cartService.changeCountOfItemsFromCart(product, count);
  }

}
