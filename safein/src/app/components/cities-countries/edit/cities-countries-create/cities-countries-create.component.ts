import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/entityclasses/city';
import { Country } from 'src/app/entityclasses/country';
import { CitiesService } from 'src/app/services/cities.service';
import { CountriesService } from 'src/app/services/countries.service';



@Component({
  selector: 'app-cities-countries-create',
  templateUrl: './cities-countries-create.component.html',
  styleUrls: ['./cities-countries-create.component.scss']
})

export class CitiesCountriesCreateComponent implements  OnInit{

  countryobj: Country = new Country;
  countrylist : Country [] = [];
  citieslist: City [] = [];
  citiesobj: City = new City;


  constructor(private countries: CountriesService,private citieserv: CitiesService) {}

  ngOnInit(): void {
    this.getAllCountries();
  }
  //Obtain full lista of countries
  getAllCountries(){
    this.countries.listAllCountries().subscribe(
      (countries: Country[]): void => {
        this.countrylist = countries;
        console.log(this.countrylist)
      },
      (error: any): void => {
        console.log(error);
      }
    )
  }

  //Create cities and countries
  saveCity(){
    this.citieserv.create(this.citiesobj).subscribe((cities: City[]): void => {
      this.citieslist = cities;
    },
    (error: any): void => {
      console.log(error);
    })
  }

  saveCountry(){
    this.countries.create(this.countryobj).subscribe((countries: Country[]): void => {
      this.countrylist = countries;
    },
    (error: any): void => {
      console.log(error);
    })
  }

  
}
