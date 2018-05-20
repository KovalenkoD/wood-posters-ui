import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import { WallGalleryPopupComponent } from '../wall-gallery-popup/wall-gallery-popup.component';
import {Product} from "../../../model/product";
import {CartService} from "../../../services/cart.service";
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  @Input() product : Product;
  @Input() products : Product[];

  productCount:number = 1;

  limitVariable: number = 6;


  // get reference to gallery component
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  // gallery configuration
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
  };

  galleryImages: GALLERY_IMAGE[] = [];

  openDialogBasedOnParameter(representation) {
    if(representation == 1) {
      this.openDialog();
    } else {
      this.openGallery();
    }
  }

  convertImagesToGalleryImage(images:string[]) {
    let galleryImages = [];
    images.forEach(image => {
      let galleryImage = {
        url: image,
        altText: this.product.name,
        title: this.product.name,
        thumbnailUrl: image
      };
      galleryImages.push(galleryImage);
    });
    return galleryImages;
  }



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

  changeLimitOfImages() {
    this.limitVariable = this.product.images.length;
  }

  ngOnChanges() {
    this.productCount = 1;
    this.limitVariable = 6;
    if(!isNullOrUndefined(this.product) && !isNullOrUndefined(this.product.images)){
      this.galleryImages = this.convertImagesToGalleryImage(this.product.images);
    }
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



  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage() {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage() {
    this.ngxImageGallery.prev();
  }

  /**************************************************/

  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.info('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    console.info('Gallery closed.');
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.info('Gallery image clicked with index ', index);
  }

  // callback on gallery image changed
  galleryImageChanged(index) {
    console.info('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    console.info('Delete image at index ', index);
  }
}
