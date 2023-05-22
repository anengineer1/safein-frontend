import { Component } from '@angular/core';
import { City } from 'src/app/entityclasses/city';
import { Country } from 'src/app/entityclasses/country';
import { CitiesService } from 'src/app/services/cities.service';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-cities-countries-edit',
  templateUrl: './cities-countries-edit.component.html',
  styleUrls: ['./cities-countries-edit.component.scss']
})
export class CitiesCountriesEditComponent {

  ngOnInit(): void {
    this.updateCity();
    this.updateCountry();
  }
  constructor(private countries: CountriesService,private citiesserv: CitiesService) {}

  country: Country = new Country;
  countrylist : Country [] = [];
  citieslist: City [] = [];
updateCity(){}
updateCountry(){}
}
