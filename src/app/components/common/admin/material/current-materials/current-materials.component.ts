import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../../../../../services/product-type.service";
import {AdminProductType} from "../../../../../model/admin/admin-product-type";
import {AdminBaseNameObject} from "../../../../../model/admin/admin-base-name-object";
import {MaterialService} from "../../../../../services/material.service";

@Component({
  selector: 'app-current-materials',
  templateUrl: './current-materials.component.html',
  styleUrls: ['./current-materials.component.scss']
})
export class CurrentMaterialsComponent implements OnInit {

  adminBaseNameObjects: AdminBaseNameObject[];

  constructor(private materialService: MaterialService) { }

  ngOnInit() {
    this.materialService.getAllMaterialsAdmin().subscribe(data => this.adminBaseNameObjects = data);
  }



}
