import { Component ,OnInit} from '@angular/core';
import {LocaleService} from "./services/locale.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private localeService: LocaleService) {}

  ngOnInit() {
    let pathName = window.location.pathname;
    if(pathName.startsWith("/en")){
      this.localeService.changeLocale("English");
    } else if (pathName.startsWith("/ua")){
      this.localeService.changeLocale("Ukraine");
    } else {
      this.localeService.changeLocale("Russian");
    }
  }
}
