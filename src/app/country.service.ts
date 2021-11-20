import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from './country';
import { COUNTRIES } from './mock-countries';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  constructor(private messageService: MessageService) { }

  getCountries(): Observable<Country[]> {
    const countries = of(COUNTRIES);
    this.messageService.add('CountryService: fetched countries');
    return countries;
  }

  getCountry(detail: string): Observable<Country> {
    const country = COUNTRIES.find(c => c.detail === detail)!;
    this.messageService.add(`CountryService: fetched country name=${detail}`);
    return of(country);
  }
}
