import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/entityclasses/city';
import { Country } from 'src/app/entityclasses/country';
import { CitiesService } from 'src/app/services/cities.service';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-cities-countries-edit',
  templateUrl: './cities-countries-edit.component.html',
  styleUrls: ['./cities-countries-edit.component.scss']
})
export class CitiesCountriesEditComponent implements OnInit{

  ngOnInit(): void {
   
  }
  
  constructor(private countries: CountriesService,private citiesserv: CitiesService) {}

  country: Country = new Country;
  countrylist : Country [] = [];
  citieslist: City [] = [];

updateCity(code:City,id:any){
  this.citiesserv.update(code,id).subscribe((citieserv: Country[]): void => {
  },
  (error: any): void => {
    console.log(error);
  })
}

updateCountry(code:Country,id:any){
  this.countries.update(code,id).subscribe((countries: Country[]): void => {
    console.log(City,id);    
  },
  (error: any): void => {
    console.log(error);
  })
}
}
