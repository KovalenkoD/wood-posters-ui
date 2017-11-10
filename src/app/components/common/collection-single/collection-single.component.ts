import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collection-single',
  templateUrl: './collection-single.component.html',
  styleUrls: ['./collection-single.component.scss']
})
export class CollectionSingleComponent implements OnInit {

  constructor() { }

  @Input() collection: {}
  @Input() reverse: number

  ngOnInit() {
  }

}
