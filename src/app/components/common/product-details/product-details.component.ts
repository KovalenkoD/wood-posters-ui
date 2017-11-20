import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { WallGalleryPopupComponent } from '../wall-gallery-popup/wall-gallery-popup.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(WallGalleryPopupComponent, {
      width: '100vw',
      height: '100vh',
      'max-width': '100vw',
      data: { name: 'hello!' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
