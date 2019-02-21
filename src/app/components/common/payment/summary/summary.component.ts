import { Component, OnInit } from '@angular/core';
import {CartResult} from "../../../../model/cart-result";
import {CartService} from "../../../../services/cart.service";
import {Product} from "../../../../model/product";
import {CartItem} from "../../../../model/cart-item";
import {ScrollToConfigOptions, ScrollToService} from "@nicky-lenaers/ngx-scroll-to";
import {ProductService} from "../../../../services/product.service";



@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {

  cartResult:CartResult;

  constructor(private cartService: CartService, private scrollToService: ScrollToService) {
    cartService.cartResultChanges.subscribe(cartResult => this.cartResult = cartResult);

  }


  ngOnInit() {
    this.cartService.getSalesOrderInfo();
    this.triggerScrollToOffsetOnly(-9999);
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

  public triggerScrollToOffsetOnly(offset: number = 0) {

    const config: ScrollToConfigOptions = {
      offset
    };

    this.scrollToService.scrollTo(config);
  }

}
