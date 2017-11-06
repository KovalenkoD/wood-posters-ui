import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss']
})


export class PopularProductsComponent implements OnInit {

  products: any = [
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
    }, {
      name: 'Белое дерево1',
      category: 'Фонарики',
      price: '300 грн.',
      link: '/category',
      image: 'http://img1.liveinternet.ru/images/attach/c/7/97/870/97870953_000.png',
      background: '#f9f7ff'
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
      image: 'http://лавкажеланий.рф/images/11shk.png',
      background: '#fcf1f1'
    },{
      name: 'Rome',
      category: 'Шкатулки',
      price: '530 грн.',
      link: '/category',
      image: 'http://лавкажеланий.рф/images/11shk.png',
      background: '#faf4f1'
    }, {
      name: 'Белое дерево1',
      category: 'Фонарики',
      price: '300 грн.',
      image: 'http://img1.liveinternet.ru/images/attach/c/7/97/870/97870953_000.png',
      background: '#f9f7ff'
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
    }
  ]

  constructor() { }

  ngOnInit() {

  }

}
