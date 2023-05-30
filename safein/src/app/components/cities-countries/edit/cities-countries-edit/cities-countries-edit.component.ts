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

    countryobj: Country = new Country;
  countrylist : Country [] = [];
  citieslist: City [] = [];
    citiesobj: City = new City;
    countryobjForCity: Country = new Country;
    
  ngOnInit(): void {
    this.getAllCountries();
    this.getAllCity();
  }
  
  constructor(private countries: CountriesService,private citiesserv: CitiesService) {}


    updateCity(){
      this.citiesobj.country = this.countryobjForCity;
      this.citiesserv.update(this.citiesobj, this.citiesobj.id).subscribe({
	  next: response => {
	      console.log(response);
	  },
	  error: error => {
	      console.log(error);
	  }
      }

      )
}
    updateCountry(){
      console.log("go",this.countryobj);
    this.countries.update(this.countryobj,this.countryobj.id).subscribe({
	next: response => {
	    console.log(response);
	},
	error: error => {
	    console.log(error);
	}
    }
  )
}

listAllCites(){
  this.citiesserv.listAllCites().subscribe(
    (citiesserv: City[]): void => {
      this.citieslist = citiesserv;
    },
    (error: any): void => {
      console.log(error);
    }
  )
}

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

getAllCity(){
  this.citiesserv.listAllCites().subscribe(
    (citiesserv: City[]): void => {
      this.citieslist = citiesserv;
    },
    (error: any): void => {
      console.log(error);
    }
  )
}
}
