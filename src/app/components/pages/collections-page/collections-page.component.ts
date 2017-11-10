import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-page',
  templateUrl: './collections-page.component.html',
  styleUrls: ['./collections-page.component.scss']
})
export class CollectionsPageComponent implements OnInit {

  collections: any = [
      {
        name: '',
        category: '',
        link: '',
        image: 'https://walldeco.ua/img/for_page/poster5.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum nisi nulla quidem repellat temporibus tenetur totam voluptatem. Accusantium aliquam culpa delectus, distinctio doloribus excepturi nisi officia provident quas voluptas.',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum nisi nulla quidem repellat temporibus tenetur totam voluptatem. Accusantium aliquam culpa delectus, distinctio doloribus excepturi nisi officia provident quas voluptas.',
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
      },{
        name: '',
        category: '',
        link: '',
        image: 'https://walldeco.ua/img/for_page/poster5.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum nisi nulla quidem repellat temporibus tenetur totam voluptatem. Accusantium aliquam culpa delectus, distinctio doloribus excepturi nisi officia provident quas voluptas.',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum nisi nulla quidem repellat temporibus tenetur totam voluptatem. Accusantium aliquam culpa delectus, distinctio doloribus excepturi nisi officia provident quas voluptas.',
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
    ];

  constructor() { }

  ngOnInit() {
  }

}
