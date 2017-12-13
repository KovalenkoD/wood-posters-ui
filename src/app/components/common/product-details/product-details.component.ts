import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import { WallGalleryPopupComponent } from '../wall-gallery-popup/wall-gallery-popup.component';
import {Product} from "../../../model/product";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  @Input() product : Product;
  @Input() products : Product[];

  productCount:number = 1;

  constructor(public dialog: MatDialog, private cartService: CartService) { }

  public wallGallery: any = {
    images: [
      'assets/images/picture.jpg',
      'assets/images/picture.jpg',
    ],
    backgrounds: [
      'assets/images/wall-01.jpg',
      'assets/images/wall-02.jpg',
      'assets/images/wall-03.jpg',
    ]
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.productCount = 1;
  }

  isNotEmptyObject(obj:any): boolean {
    return obj != null && obj;
  }

  isMinusDisabled() : boolean {
    return this.productCount <= 1;
  }

  changeProductCountMinus() : void {
    this.productCount = this.productCount - 1;
  }

  changeProductCountPlus() : void {
    this.productCount = this.productCount + 1;
  }

  addProductToCart(product:Product): void {
    this.cartService.addProductToCart(product.id, this.productCount);
  }

  sortProductArrayBasedOnCurrentProduct() : Product[]{
    let clonedProducts = this.products.map(x => Object.assign({}, x));
    let that = this;
    clonedProducts.sort(function(a, b){
      if (a.id == that.product.id){
        return 1;
      } else if ( b.id == that.product.id){
        return 1;
      }
      return 0;
    });
    return clonedProducts;
  }

  openDialog(): void {
    this.wallGallery.product = this.product;
    this.wallGallery.products = this.sortProductArrayBasedOnCurrentProduct();
    let dialogRef = this.dialog.open(WallGalleryPopupComponent, {
      width: '100vw',
      height: '100vh',
      data: this.wallGallery
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
