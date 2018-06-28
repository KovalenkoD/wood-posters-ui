import { Injectable } from '@angular/core';
import {Observable} from "../../../node_modules/rxjs";
import {RestService} from "./rest.service";

@Injectable()
export class LocaleService {

  private changeLocaleUrl = 'wizard/changeLocale';
  private getCurrentLocaleUrl = 'wizard/getCurrentLocale';


  constructor(private restService: RestService) {

  }

  changeLocale(locale: string) : void {
     this.restService.get<void>(this.changeLocaleUrl, locale).subscribe();
  }

  getCurrentLocale() : Observable<any> {
    return this.restService.get<any>(this.getCurrentLocaleUrl);
  }



}
