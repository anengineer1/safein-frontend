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
    
  }
  constructor(private countries: CountriesService,private citiesserv: CitiesService) {}

  cities : City = new City;
  country: Country = new Country;
  countrylist : Country [] = [];
  citieslist: City [] = [];


  deleteCity(id:any){
    this.citiesserv.delete(id).subscribe((citiesserv: City[]): void => {
      
    },
    (error: any): void => {
      console.log(error);
    })
  }  
  
  deleteCountry(id:any){
    this.countries.delete(id).subscribe((countries: Country[]): void => {
    },
    (error: any): void => {
      console.log(error);
    })
  }  
}
