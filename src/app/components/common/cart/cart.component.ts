import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

export interface Product {
 name?: string,
 price?: string,
 category?: string,
 image?: string,
 link: string,
 background: string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  isOpened: boolean = this.cartService.opened;

  products: Product[] = [
    {
      name: 'Белое дерево1',
      category: 'Фонарики',
      price: '300 грн.',
      link: '/category',
      image: 'http://omegatea.ru/img/big/522000.png',
      background: '#f9f9f9'
    },{
      name: 'Route 66',
      category: 'Постеры',
      price: '320 грн.',
      link: '/category',
      image: 'http://лавкажеланий.рф/images/11shk.png',
      background: '#fcf1f1'
    },{
      name: 'Rome',
      category: 'Шкатулки',
      price: '530 грн.',
      link: '/category',
      image: 'http://лавкажеланий.рф/images/11shk.png',
      background: '#faf4f1'
    },{
      name: 'Белое дерево1',
      category: 'Фонарики',
      price: '300 грн.',
      link: '/category',
      image: 'http://omegatea.ru/img/big/522000.png',
      background: '#f9f9f9'
    },{
      name: 'Route 66',
      category: 'Постеры',
      price: '320 грн.',
      link: '/category',
      image: 'http://лавкажеланий.рф/images/11shk.png',
      background: '#fcf1f1'
    },{
      name: 'Rome',
      category: 'Шкатулки',
      price: '530 грн.',
      link: '/category',
      image: 'http://лавкажеланий.рф/images/11shk.png',
      background: '#faf4f1'
    },
    {
          name: 'Белое дерево1',
          category: 'Фонарики',
          price: '300 грн.',
          link: '/category',
          image: 'http://omegatea.ru/img/big/522000.png',
          background: '#f9f9f9'
        },{
          name: 'Route 66',
          category: 'Постеры',
          price: '320 грн.',
          link: '/category',
          image: 'http://лавкажеланий.рф/images/11shk.png',
          background: '#fcf1f1'
        },{
          name: 'Rome',
          category: 'Шкатулки',
          price: '530 грн.',
          link: '/category',
          image: 'http://лавкажеланий.рф/images/11shk.png',
          background: '#faf4f1'
        },{
          name: 'Белое дерево1',
          category: 'Фонарики',
          price: '300 грн.',
          link: '/category',
          image: 'http://omegatea.ru/img/big/522000.png',
          background: '#f9f9f9'
        },{
          name: 'Route 66',
          category: 'Постеры',
          price: '320 грн.',
          link: '/category',
          image: 'http://лавкажеланий.рф/images/11shk.png',
          background: '#fcf1f1'
        },{
          name: 'Rome',
          category: 'Шкатулки',
          price: '530 грн.',
          link: '/category',
          image: 'http://лавкажеланий.рф/images/11shk.png',
          background: '#faf4f1'
        },
    {
          name: 'Белое дерево1',
          category: 'Фонарики',
          price: '300 грн.',
          link: '/category',
          image: 'http://omegatea.ru/img/big/522000.png',
          background: '#f9f9f9'
        },{
          name: 'Route 66',
          category: 'Постеры',
          price: '320 грн.',
          link: '/category',
          image: 'http://лавкажеланий.рф/images/11shk.png',
          background: '#fcf1f1'
        },{
          name: 'Rome',
          category: 'Шкатулки',
          price: '530 грн.',
          link: '/category',
          image: 'http://лавкажеланий.рф/images/11shk.png',
          background: '#faf4f1'
        },{
          name: 'Белое дерево1',
          category: 'Фонарики',
          price: '300 грн.',
          link: '/category',
          image: 'http://omegatea.ru/img/big/522000.png',
          background: '#f9f9f9'
        },{
          name: 'Route 66',
          category: 'Постеры',
          price: '320 грн.',
          link: '/category',
          image: 'http://лавкажеланий.рф/images/11shk.png',
          background: '#fcf1f1'
        },{
          name: 'Rome',
          category: 'Шкатулки',
          price: '530 грн.',
          link: '/category',
          image: 'http://лавкажеланий.рф/images/11shk.png',
          background: '#faf4f1'
        }
  ];

  ngOnInit() {
  }

  onCartClose(): void {
    this.cartService.closeCart();
    this.isOpened = this.cartService.opened;
  }

}