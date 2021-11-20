import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
// import { COUNTRIES } from '../mock-countries';
import { CountryService } from '../country.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {

  countries: Country[] = [];
  // countries = COUNTRIES;
  // selectedCountry?: Country;
  constructor(private countryService: CountryService) { }

  // onSelect(country: Country): void {
  //   this.selectedCountry = country;
  //   this.messageService.add('COuntriesComponents: Selected country detail=${country.detail}');
  // }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

}
