import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import { WallGalleryPopupComponent } from '../wall-gallery-popup/wall-gallery-popup.component';
import {Product} from "../../../model/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product : Product;

  constructor(public dialog: MatDialog) { }

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

  openDialog(): void {
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
