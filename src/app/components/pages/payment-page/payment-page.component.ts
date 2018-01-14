import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentPageComponent implements OnInit {

  constructor() {
  }


  person: any = {
    name: '',
    firstname: '',
    message: '',
    phone: '',
    email: ''
  };


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
