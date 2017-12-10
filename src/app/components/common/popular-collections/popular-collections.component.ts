import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import {ProductService} from "../../../services/product.service";
import {Bundle} from "../../../model/bundle";

@Component({
  selector: 'app-popular-collections',
  templateUrl: './popular-collections.component.html',
  styleUrls: ['./popular-collections.component.scss']
})
export class PopularCollectionsComponent implements OnInit {

  private collections: Bundle[];

  constructor(private productService : ProductService) { }



  public carouselSecond: NgxCarousel;

  currentSlide: number = 1;


  ngOnInit() {
    this.carouselSecond = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        slide: 1,
        speed: 400,
        interval: 5000,
        point: {
          visible: false,
        },
        load: 2,
        touch: false,
        loop: true,
        custom: 'banner'
      }
    this.getMostPopularBundle();
  }

  onmoveFn(data: NgxCarouselStore) {
    console.log(data);
    this.currentSlide = data.currentSlide + 1;
  }

  getMostPopularBundle() {
    this.productService.getMostPopularBundle(this.productService.popularType)
      .subscribe(
        collections => this.collections = collections,
        err => {
          console.log(err);
        });
  }

}
