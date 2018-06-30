import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../../../model/category";
import {Material} from "../../../model/material";
import {ProductColor} from "../../../model/product-color";
import {Technology} from "../../../model/technology";
import {CategoryService} from "../../../services/category.service";
import {MaterialService} from "../../../services/material.service";
import {TechnologyService} from "../../../services/technology.service";
import {ProductColorService} from "../../../services/product.color.service";

import {FilterResultService} from "../../../services/filter-result.service";


@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent implements OnInit {

  @Input() hiddenSection: boolean;

  @Output() hiddenSectionChange = new EventEmitter<boolean>();

  categoryList:Category[];
  materialList:Material[];
  productColorList:ProductColor[];
  technologyList:Technology[];
  categoryLimit: number = 4;
  materialLimit: number = 4;
  productColorLimit: number = 4;
  technologyLimit: number = 4;

  constructor(private categoryService : CategoryService, private materialService: MaterialService,
     private productColorService: ProductColorService, private technologyService: TechnologyService, private filterResultService: FilterResultService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(data => this.categoryList = data);
    this.materialService.getAllMaterials().subscribe(data => this.materialList = data);
    this.productColorService.getAllProductColors().subscribe(data => this.productColorList = data);
    this.technologyService.getAllTechnologies().subscribe(data => this.technologyList = data);

    this.filterResultService.clearFilters.subscribe(data => {
      if(data){
        this.clear();
      }
    });

  }

  hideFilters(hide: boolean) {
      this.hiddenSectionChange.emit(hide);
   // this.categoryLimit = 4;
  }

  clear(){
    this.categoryList.forEach(category => {category.checked = false});
    this.materialList.forEach(material => {material.checked = false});
    this.productColorList.forEach(productColor => {productColor.checked = false});
    this.technologyList.forEach(technology => {technology.checked = false});

    this.filterResultService.categoryFilters.next([]);
    this.filterResultService.materialFilters.next([]);
    this.filterResultService.colorFilters.next([]);
    this.filterResultService.technologyFilters.next([]);
  }

  getSelectedItemsLength(listOfItems) : number {
    return this.getSelectedItems(listOfItems).length;
  }

  getSelectedItems(listOfItems) : any[] {
    return listOfItems ? listOfItems.filter(item => item.checked) : [];
  }

  showMoreCategories(){
    this.categoryLimit = 999;
  }

  showMoreMaterial(){
    this.materialLimit = 999;
  }

  showMoreProductColor(){
    this.productColorLimit = 999;
  }

  showMoreTechnology(){
    this.technologyLimit = 999;
  }

  onChange(event, index, item) {
    item.checked = !item.checked;
    this.filterResultService.categoryFilters.next(this.getSelectedCategoriesIds());
  }

  onChangeMaterial(event, index, item) {
    item.checked = !item.checked;
    this.filterResultService.materialFilters.next(this.getSelectedMaterialIds());
  }

  onChangeColor(event, index, item) {
    item.checked = !item.checked;
    this.filterResultService.colorFilters.next(this.getSelectedColorIds());
  }

  onChangeTechnology(event, index, item) {
    item.checked = !item.checked;
    this.filterResultService.technologyFilters.next(this.getSelectedTechnologiesIds());
  }

  getSelectedCategoriesIds(): number[] {
    return this.getSelectedIds(this.categoryList);
  }

  getSelectedMaterialIds(): number[] {
    return this.getSelectedIds(this.materialList);
  }

  getSelectedTechnologiesIds(): number[] {
    return this.getSelectedIds(this.technologyList);
  }

  getSelectedColorIds(): number[] {
    return this.getSelectedIds(this.productColorList);
  }
  getSelectedIds(list: any[]): number[] {
    let selectedFilterIDs = [];
    let selectedFilter = this.getSelectedItems(list);
    selectedFilter.forEach(category => {selectedFilterIDs.push(category.id)});
    return selectedFilterIDs;
  }


}
