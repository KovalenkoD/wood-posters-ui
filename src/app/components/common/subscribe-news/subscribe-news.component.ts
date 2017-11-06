import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-subscribe-news',
  templateUrl: './subscribe-news.component.html',
  styleUrls: ['./subscribe-news.component.scss']
})
export class SubscribeNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
