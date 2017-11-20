import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-wall-gallery-popup',
  templateUrl: './wall-gallery-popup.component.html',
  styleUrls: ['./wall-gallery-popup.component.scss']
})
export class WallGalleryPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WallGalleryPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
