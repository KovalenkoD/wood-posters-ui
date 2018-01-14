import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Contact} from "../../../model/contact";
import {CartService} from "../../../services/cart.service";


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentPageComponent implements OnInit {

  constructor(private cartService: CartService) {
  }


  contact: Contact = new Contact("","","","","");

  submitOrder(): void {
    this.cartService.submitOrder(this.contact);
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
  }

}
