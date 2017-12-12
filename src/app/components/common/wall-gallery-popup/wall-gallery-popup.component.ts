import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import {Router} from "@angular/router";
import {Product} from "../../../model/product";


@Component({
  selector: 'app-wall-gallery-popup',
  templateUrl: './wall-gallery-popup.component.html',
  styleUrls: ['./wall-gallery-popup.component.scss']
})
export class WallGalleryPopupComponent implements OnInit {

  constructor(public router: Router,
    public dialogRef: MatDialogRef<WallGalleryPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public wallCarousel: NgxCarousel
  public currentImage: string = null;
  public currentDot: number = 0;

  ngOnInit() {

    this.wallCarousel = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        slide: 1,
        speed: 400,
        point: {
          visible: false,
        },
        load: 2,
        touch: false,
        loop: true,
        custom: 'banner'
      }
  }

  onBgChange(backgrounds, background): any {
    this.currentImage = background;
    this.currentDot = backgrounds.indexOf(background);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  selectProduct(product:Product) : void {
    this.onCloseClick();
    this.router.navigate(["/product", product.id]);
  }


}
