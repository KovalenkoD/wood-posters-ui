import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import {CartResult} from "../../../model/cart-result";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartResult:CartResult;

  constructor(private cartService: CartService) {
    cartService.cartResultChanges.subscribe(cartResult => this.cartResult = cartResult);
  }

  ngOnInit() {
  }

  onCartOpen() {
    this.cartService.openCart();

  }

  getCardItemsCount(): number {
    if(this.cartResult && this.cartResult.count){
      return this.cartResult.count;
    } else {
      return 0;
    }
  }

}
