import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/entityclasses/city';
import { Country } from 'src/app/entityclasses/country';
import { CitiesService } from 'src/app/services/cities.service';
import { CountriesService } from 'src/app/services/countries.service';
@Component({
  selector: 'app-cities-countries-delete',
  templateUrl: './cities-countries-delete.component.html',
  styleUrls: ['./cities-countries-delete.component.scss']
})
export class CitiesCountriesDeleteComponent implements OnInit{
  ngOnInit(): void {
    this.deleteCity();
    this.deleteCountry();
  }
  constructor(private countries: CountriesService,private citiesserv: CitiesService) {}

  country: Country = new Country;
  countrylist : Country [] = [];
  citieslist: City [] = [];

  //Delete country 
  deleteCountry(){
    this.countries.delete().subscribe((countries: Country[]): void => {
      this.countrylist = countries;
    },
    (error: any): void => {
      console.log(error);
    })
  }  
  deleteCity(){
    this.citiesserv.delete().subscribe((countries: Country[]): void => {
      this.citiesserv = this.citiesserv;
    },
    (error: any): void => {
      console.log(error);
    })
  }  
}
