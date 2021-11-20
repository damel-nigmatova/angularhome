import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  // @Input() country?: Country;
  country: Country | undefined;

  constructor( private route: ActivatedRoute, private countryService: CountryService, private location: Location) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.countryService.getCountry(name)
    .subscribe(country => this.country = country);
  }

  goBack(): void {
    this.location.back();
  }
}
