import { Component, OnInit } from '@angular/core';

export interface Product {
 name?: string,
 price?: string,
 category?: string,
 image?: string,
 link: string,
 background: string
}

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss'],
})
export class FilterResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
    }
  ];

}
