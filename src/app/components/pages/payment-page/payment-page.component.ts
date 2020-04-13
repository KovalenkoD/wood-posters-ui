import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Contact} from "../../../model/contact";
import {CartResult} from "../../../model/cart-result";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentPageComponent implements OnInit {

  dontHaveItems: boolean = false;

  selectedValue1: any;
  selectedValue2: any;
  selectedValue3: any;

  cartResult:CartResult;

  constructor(private cartService: CartService, private router: Router) {
  }

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  contact: Contact = new Contact("","","","","","");


  getFistNameErrorMessage() {
    return this.firstName.hasError('required') ? 'You must enter a value' : '';
  }

  getLastNameErrorMessage() {
    return this.lastName.hasError('required') ? 'You must enter a value' : '';
  }

  getPhoneErrorMessage() {
    return this.phone.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorEmailMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  hasErrorsInForm() : boolean {
    return this.firstName.hasError('required') || this.lastName.hasError('required') || this.email.hasError('required') || this.email.hasError('email') || this.phone.hasError('required')
 }

  submitOrder(): void {
    (window as any).fbq('track', 'Purchase', {value: this.cartResult.fullPrice, currency: 'UA'});
    if(!this.hasErrorsInForm() && !this.isCartDoesntHasItems()){
      this.cartService.submitOrder(this.contact);
      this.router.navigate(['thank-you']);
    }
  }

  isCartDoesntHasItems(): boolean {
    this.dontHaveItems = this.cartResult.count === 0;
    return this.dontHaveItems;
  }

  payment: any = {
    methods: [
      'Новая Почта',
      'Новая Почта',
      'Новая Почта',
      'Новая Почта'
    ],
    departments: [
      'Отделение 1',
      'Отделение 1',
      'Отделение 1',
      'Отделение 1'
    ],
    ways: [
      'Наложенный платеж',
      'Наложенный платеж',
      'Наложенный платеж',
      'Наложенный платеж'
    ]
  };

  ngOnInit() {
    this.cartService.cartResultChanges.subscribe(cartResult => this.cartResult = cartResult);
  }

}
