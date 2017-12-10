import { Component, OnInit, Input } from '@angular/core';
import {Bundle} from "../../../model/bundle";
import {BundleChild} from "../../../model/bundle-child";


@Component({
  selector: 'app-interactive-image',
  templateUrl: './interactive-image.component.html',
  styleUrls: ['./interactive-image.component.scss']
})

export class InteractiveImageComponent implements OnInit {

  constructor() { }

  @Input() collection: Bundle;

  ngOnInit() {
  }

  onToggleHint(target: any): void {
      if(target.active === true) {
      target.active = !target.active;
    } else {
      this.collection.childItems.forEach((elem: any)=>{
        elem.active = false;
      })
      target.active = !target.active;
    }

  }

  isActive(target: any): boolean {
      if(target.active && target.active === true) {
        return true;
      } else {
        return false;
      }
  }

  getPosition(target:BundleChild) : any{
    let postition = {
        left: target.x_coordinate + '%',
        top: target.y_coordinate + '%'
    }
    return postition;
  }
}
