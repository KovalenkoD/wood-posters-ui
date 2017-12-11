import { Component, OnInit, Input } from '@angular/core';
import {Bundle} from "../../../model/bundle";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-collection-single',
  templateUrl: './collection-single.component.html',
  styleUrls: ['./collection-single.component.scss']
})
export class CollectionSingleComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Input() collection: Bundle;
  @Input() reverse: number;

  ngOnInit() {
  }

  addProductToCart(product:Bundle): void {
    this.cartService.addProductToCart(product.id, 1);
  }

}
