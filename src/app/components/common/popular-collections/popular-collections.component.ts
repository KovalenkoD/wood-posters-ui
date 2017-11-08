import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'app-popular-collections',
  templateUrl: './popular-collections.component.html',
  styleUrls: ['./popular-collections.component.scss']
})
export class PopularCollectionsComponent implements OnInit {

  constructor() { }

  public carouselSecond: NgxCarousel

  currentSlide: number = 1;
  collections: any = [
    {
        name: '',
        category: '',
        link: '',
        image: 'https://walldeco.ua/img/for_page/poster5.jpg',
        products: [
          {
            category: 'Постеры',
            image: 'https://media.istockphoto.com/vectors/poster-mock-up-on-the-brick-wall-vector-id480850848',
            name: 'London Calling',
            price: '450 Грн.',
            link: 'qweqwe',
            position: {
              left: '73%',
              top: '13%'
            }
          },{
            category: 'Постеры',
            image: 'https://media.istockphoto.com/vectors/poster-mock-up-on-the-brick-wall-vector-id480850848',
            name: 'London Calling',
            price: '450 Грн.',
            link: 'qweqwe',
            position: {
              left: '50%',
              top: '56%'
            }
          }
        ],
      }, {
        name: '',
        category: '',
        link: '',
        image: 'https://iss.zillowstatic.com/image/traditional-living-room-with-crown-molding-i_g-IS5uy0dsrc66201000000000-godOy.jpg',
        products: [
          {
            category: 'Постеры',
            image: 'https://media.istockphoto.com/vectors/poster-mock-up-on-the-brick-wall-vector-id480850848',
            name: 'London Calling',
            price: '450 Грн.',
            link: 'qweqwe',
            position: {
              left: '73%',
              top: '13%'
            }
          },{
            category: 'Постеры',
            image: 'https://media.istockphoto.com/vectors/poster-mock-up-on-the-brick-wall-vector-id480850848',
            name: 'London Calling',
            price: '450 Грн.',
            link: 'qweqwe',
            position: {
              left: '50%',
              top: '56%'
            }
          }
        ],
      }
    ]

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
  }

  onmoveFn(data: NgxCarouselStore) {
    console.log(data);
    this.currentSlide = data.currentSlide + 1;
  }

}
