import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import {CartResult} from "../../../model/cart-result";
import {FormControl} from "@angular/forms";
import {LocaleService} from "../../../services/locale.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartResult:CartResult;
  languageControl: FormControl;

  constructor(private cartService: CartService, private localeService: LocaleService) {
    cartService.cartResultChanges.subscribe(cartResult => this.cartResult = cartResult);
  }

  ngOnInit() {
    this.localeService.getCurrentLocale().subscribe(locale => {
      let pathName = window.location.pathname;
      let localeName = "ru";
      if(pathName.startsWith("/en")){
        localeName = "en";
      } else if (pathName.startsWith("/ua")){
        localeName = "ua";
      }
      this.languageControl = new FormControl(localeName);
      this.languageControl.valueChanges.subscribe(
        (selectedValue) => {
          var originalPath = window.location.pathname.replace("/en/", "/").replace("/ru/", "/").replace("/ua/", "/");
          window.location.pathname = selectedValue + originalPath;
        }
      );
    });


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
