import { Component ,OnInit} from '@angular/core';
import {LocaleService} from "./services/locale.service";
import {FacebookPixelService} from "./services/facebook.pixel.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private localeService: LocaleService, private facebookPixelService: FacebookPixelService) {
    facebookPixelService.load();
  }

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
