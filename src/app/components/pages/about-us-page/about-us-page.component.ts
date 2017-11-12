import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {

  constructor() { }

  person: any = {
    name: '',
    firstname: '',
    message: '',
    phone: '',
    email: ''
  }

  ngOnInit() {
  }

}
