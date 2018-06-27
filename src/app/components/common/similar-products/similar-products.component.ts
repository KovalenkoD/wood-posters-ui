import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {NgxCarousel, NgxCarouselStore} from "ngx-carousel";

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss']
})
export class SimilarProductsComponent implements OnInit {

  @Input() products : Product[];
  @Input() product : Product;


  public carouselOne: NgxCarousel;

  constructor() { }

  removeCurrentProductFromProducts(){
    return this.products.filter(product => this.product.id != product.id);
  }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 3, all: 0},
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
            bottom: 0px;
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
  }
}
