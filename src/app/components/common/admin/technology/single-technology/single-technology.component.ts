import { Component, OnInit } from '@angular/core';
import {AdminBaseNameObject} from "../../../../../model/admin/admin-base-name-object";
import {TechnologyService} from "../../../../../services/technology.service";

@Component({
  selector: 'app-single-technology',
  templateUrl: './single-technology.component.html',
  styleUrls: ['./single-technology.component.scss']
})
export class SingleTechnologyComponent implements OnInit {

  adminBaseNameObject: AdminBaseNameObject = new AdminBaseNameObject(-1, "" ,"" ,"");

  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {
  }

  createOrUpdateTechnology(id:number) : void {
    console.log(this.adminBaseNameObject);
    if(id == -1){
      this.technologyService.createTechnology(this.adminBaseNameObject);
      this.adminBaseNameObject = new AdminBaseNameObject(-1, "" ,"" ,"");
    } else {

    }
  }


}
