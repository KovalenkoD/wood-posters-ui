import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import {CartResult} from "../../../model/cart-result";
import {Product} from "../../../model/product";
import {CartItem} from "../../../model/cart-item";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  isOpened: boolean;

  cartResult:CartResult;

  constructor(private cartService: CartService, private router: Router) {
    cartService.cardIsOpenedChanges.subscribe(item => this.isOpened = item);
    cartService.cartResultChanges.subscribe(cartResult => this.cartResult = cartResult);
  }

  isCartHasItems(): boolean {
    return this.cartResult.count > 0;
  }

  ngOnInit() {
    this.isOpened = this.cartService.isOpenCart();
  }

  onCartClose(): void {
    this.cartService.closeCart();
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

  navigateToPayment() : void {
    this.cartService.closeCart();
    this.router.navigateByUrl('/payment');
  }

}
