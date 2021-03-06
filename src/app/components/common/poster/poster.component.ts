import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  constructor() { }

  @Input() productsLength: number = 0;

  image:string = '/assets/images/pexels-photo-220182.jpeg';
  @Input() white: boolean;

  ngOnInit() {
  }

}
