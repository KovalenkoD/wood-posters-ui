import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import {Product} from "../../../model/product";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  slides: String[] = [
    'http://www.novostiglamura.ru/wp-content/uploads/2015/09/brb1.jpg',
    'https://www.svyatobum.com.ua/fotky64413/fotos/_vyrn_2014ef0ca315e43dbcd824f926697ba63280.jpeg',
    'http://i.ebayimg.com/00/s/NTY2WDg0OQ==/z/9ZMAAOSwnDZUGDLe/$_32.JPG?set_id=880000500F',
    'http://www.perm-podarok.ru/images/catalog/544/Korobki-novogodnih-podarkov.jpg'
  ];

  public products: Product[];

  curentSlide: number = 1;

  constructor(private productService : ProductService, private cartService: CartService) { }

  public carouselOne: NgxCarousel;

  ngOnInit() {
    this.getHomeSliderProducts();

    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 5000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px 35% 12px 0;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            z-index: 15;
            box-sizing: border-box;
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.2);
            padding: 3px;
            margin: 0 3px;
            transition: background .4s ease;
            cursor: pointer;
          }
          .ngxcarouselPoint li.active {
              background: rgba(0, 0, 0, 1); 
              padding: 5px;
              position: relative;
              top: -2px;
          }
        `
      },
      load: 2,
      touch: false,
      loop: true,
      custom: 'banner'
    }
  }

  public myfunc(event: Event) {
    console.log(Event)
     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
  }

  onmoveFn(data: NgxCarouselStore) {
    console.log(data);
    this.curentSlide = data.currentSlide + 1;
  }

  getHomeSliderProducts() {
    this.productService.getMostPopularProductsByType(this.productService.homeSliderPopularType)
      .subscribe(
        products => this.products = products,
        err => {
          console.log(err);
        });
  }

  addProductToCart(product:Product): void {
    (window as any).fbq('track', 'AddToCart');
    this.cartService.addProductToCart(product.id, 1);
  }

}
