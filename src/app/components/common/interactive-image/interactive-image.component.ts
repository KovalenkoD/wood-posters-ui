import { Component, OnInit, Input } from '@angular/core';

export interface InteractiveImage {
  category: string,
  image: string,
  name: string,
  price: string
  link: string,
  position: {
    left: string,
    top: string
  }
}

@Component({
  selector: 'app-interactive-image',
  templateUrl: './interactive-image.component.html',
  styleUrls: ['./interactive-image.component.scss']
})

export class InteractiveImageComponent implements OnInit {

  constructor() { }

  @Input() collections: InteractiveImage[];
  @Input() image: string;

  ngOnInit() {
  }

  onToggleHint(target: any): void {
    if(target.active === true) {
      target.active = !target.active;
    } else {
      this.collections.forEach((elem: any)=>{
        elem.active = false;
      })
      target.active = !target.active;
    }

  }

}
