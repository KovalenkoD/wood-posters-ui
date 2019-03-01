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

import {isNullOrUndefined} from "util";



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
    this.categoryService.getAllCategories().subscribe(data => this.initCategoryList(data));
    this.materialService.getAllMaterials().subscribe(data => this.initMaterialsList(data));
    this.productColorService.getAllProductColors().subscribe(data => this.initProductColorsList(data));
    this.technologyService.getAllTechnologies().subscribe(data => this.initTechnologyList(data));

    this.filterResultService.clearFilters.subscribe(data => {
      if(data){
        this.clear();
      }
    });

    this.filterResultService.removeFilter.subscribe(filterForRemove => {
      this.removeFilter(filterForRemove);
    });

  }

  initCategoryList(categoryList:Category[]){
    let selectedCategories = this.filterResultService.categoryFilters.getValue();
    if(!isNullOrUndefined(selectedCategories) && selectedCategories.length > 0){
      categoryList.forEach(category => {
        category.checked = selectedCategories.indexOf(category.id) > -1;
      })
    }

    this.categoryList = categoryList;
  }

  initMaterialsList(materialsList:Material[]){
    let selectedMaterials = this.filterResultService.materialFilters.getValue();
    if(!isNullOrUndefined(selectedMaterials) && selectedMaterials.length > 0){
      materialsList.forEach(material => {
        material.checked = selectedMaterials.indexOf(material.id) > -1;
      })
    }

    this.materialList = materialsList;
  }

  initProductColorsList(productColorList:ProductColor[]){
    let selectedProductColor = this.filterResultService.colorFilters.getValue();
    if(!isNullOrUndefined(selectedProductColor) && selectedProductColor.length > 0){
      productColorList.forEach(productColor => {
        productColor.checked = selectedProductColor.indexOf(productColor.id) > -1;
      })
    }

    this.productColorList = productColorList
  }

  initTechnologyList(technologyList:Technology[]){
    let selectedTechnology = this.filterResultService.technologyFilters.getValue();
    if(!isNullOrUndefined(selectedTechnology) && selectedTechnology.length > 0){
      technologyList.forEach(technology => {
        technology.checked = selectedTechnology.indexOf(technology.id) > -1;
      })
    }

    this.technologyList = technologyList
  }

  removeFilter(filterForRemove){
    let category = this.categoryList.find(item => item.id == filterForRemove.id && item.name == filterForRemove.name);
    if(category) {
      this.onChange(category);
      return
    }
    let material = this.materialList.find(item => item.id == filterForRemove.id && item.name == filterForRemove.name);
    if(material) {
      this.onChangeMaterial(material);
      return
    }
    let technology = this.technologyList.find(item => item.id == filterForRemove.id && item.name == filterForRemove.name);
    if(technology) {
      this.onChangeTechnology(technology);
      return
    }
    let color = this.productColorList.find(item => item.id == filterForRemove.id && item.name == filterForRemove.name);
    if(color) {
      this.onChangeColor(color);
      return
    }
  }

  hideFilters(hide: boolean) {
      this.hiddenSectionChange.emit(hide);
   // this.categoryLimit = 4;
  }

  clear(){
    this.cleanList(this.categoryList);
    this.cleanList(this.materialList);
    this.cleanList(this.productColorList);
    this.cleanList(this.technologyList);

    this.filterResultService.categoryFilters.next([]);
    this.filterResultService.materialFilters.next([]);
    this.filterResultService.colorFilters.next([]);
    this.filterResultService.technologyFilters.next([]);
    this.filterResultService.selectedItems.next([]);
  }

  cleanList(list: any[]){
    if(!isNullOrUndefined(list)){
      list.forEach(item => {item.checked = false});
    }
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

  onChange(item) {
    item.checked = !item.checked;
    this.filterResultService.categoryFilters.next(this.getSelectedCategoriesIds());
    this.filterResultService.selectedItems.next(this.getSelectedAllItems());
  }

  onChangeMaterial(item) {
    item.checked = !item.checked;
    this.filterResultService.materialFilters.next(this.getSelectedMaterialIds());
    this.filterResultService.selectedItems.next(this.getSelectedAllItems());
  }

  onChangeColor(item) {
    item.checked = !item.checked;
    this.filterResultService.colorFilters.next(this.getSelectedColorIds());
    this.filterResultService.selectedItems.next(this.getSelectedAllItems());
  }

  onChangeTechnology(item) {
    item.checked = !item.checked;
    this.filterResultService.technologyFilters.next(this.getSelectedTechnologiesIds());
    this.filterResultService.selectedItems.next(this.getSelectedAllItems());
  }

  getSelectedAllItems(): any[] {
    let selectedItems = [];
    let selectedCategories = this.getSelectedItems(this.categoryList);
    let selectedMaterial = this.getSelectedItems(this.materialList);
    let selectedTechnology = this.getSelectedItems(this.technologyList);
    let selectedProductColor = this.getSelectedItems(this.productColorList);
    return selectedCategories.concat(selectedMaterial).concat(selectedTechnology).concat(selectedProductColor);
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
