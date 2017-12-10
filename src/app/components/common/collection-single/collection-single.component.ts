import { Component, OnInit, Input } from '@angular/core';
import {Bundle} from "../../../model/bundle";

@Component({
  selector: 'app-collection-single',
  templateUrl: './collection-single.component.html',
  styleUrls: ['./collection-single.component.scss']
})
export class CollectionSingleComponent implements OnInit {

  constructor() { }

  @Input() collection: Bundle;
  @Input() reverse: number;

  ngOnInit() {
  }

}
