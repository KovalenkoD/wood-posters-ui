import { Component, OnInit } from '@angular/core';
import {AdminBaseNameObject} from "../../../../../model/admin/admin-base-name-object";
import {TechnologyService} from "../../../../../services/technology.service";

@Component({
  selector: 'app-current-technologies',
  templateUrl: './current-technologies.component.html',
  styleUrls: ['./current-technologies.component.scss']
})
export class CurrentTechnologiesComponent implements OnInit {

  adminBaseNameObjects: AdminBaseNameObject[];
  adminBaseNameObject: AdminBaseNameObject;
  modify: boolean = false;
  delete: boolean = false;

  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {
    this.technologyService.getAllTechnologiesAdmin().subscribe(data => this.adminBaseNameObjects = data);
  }

  modifyTechnology(adminBaseNameObject: AdminBaseNameObject){
    this.adminBaseNameObject = adminBaseNameObject;
    this.modify = true;
  }

  deleteTechnologyQuestion(deleteQuestion: boolean = true){
    this.delete = deleteQuestion;
  }

  deleteTechnology(){
    this.deleteTechnologyQuestion(false);
    this.modify = false;
    this.technologyService.deleteTechnology(this.adminBaseNameObject);
    this.adminBaseNameObjects = this.adminBaseNameObjects.filter(adminBaseNameObject => adminBaseNameObject !== this.adminBaseNameObject);
    this.adminBaseNameObject = null;
  }

  updateTechnology(): void{
    this.modify = false;
    this.technologyService.updateTechnology(this.adminBaseNameObject);
  }



}
