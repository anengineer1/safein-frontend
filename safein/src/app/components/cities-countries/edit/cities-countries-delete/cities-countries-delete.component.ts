import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/entityclasses/city';
import { Country } from 'src/app/entityclasses/country';
import { Customer } from 'src/app/entityclasses/customer';
import { CitiesService } from 'src/app/services/cities.service';
import { CountriesService } from 'src/app/services/countries.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-cities-countries-delete',
  templateUrl: './cities-countries-delete.component.html',
  styleUrls: ['./cities-countries-delete.component.scss']
})


export class CitiesCountriesDeleteComponent implements OnInit {

  //Attributes
  cities: City = new City;
  country: Country = new Country;
  countrylist: Country[] = [];
  citieslist: City[] = [];


  //Constructor
  constructor(private countriesService: CountriesService, private citiesService: CitiesService, private customersService: CustomersService) { }

  //cycle phase ngOnInit
  ngOnInit(): void {
    this.getAllCountries();
    this.getAllCities();
  }


  /*   listAllCites() {
      this.citiesService.listAllCites().subscribe(
        (citiesserv: City[]): void => {
          this.citieslist = citiesserv;
        },
        (error: any): void => {
          console.log(error);
        }
      )
    } */
  getAllCountries() {
    this.countriesService.listAllCountries().subscribe(
      (countriesService: Country[]): void => {
        this.countrylist = countriesService;
        console.log(this.countrylist)
      },
      (error: any): void => {console.log(error);
      }
    )
  }

  getAllCities() {
    this.citiesService.listAllCites().subscribe(
      (citiesService: City[]): void => {
        this.citieslist = citiesService;
      },
      (error: any): void => {
        console.log(error);
      }
    )
  }


  //delete city by id
  deleteCity(): void {
    this.citiesService.deleteCity(this.cities, this.cities.id).subscribe(
      response => {
        //console.log(response);
        alert("City deleted successfully");
      },
      (error: any): void => { console.log(error); }
    );
  }

  //delete country by id
  deleteCountry() {
    this.countriesService.deleteCountry(this.country, this.country.id).subscribe(
      response => {
        //console.log(response);
        alert("Country  "+ this.country.countryName +" deleted successfully");
      },
      (error: any): void => {
        console.log(error);
      })
  }

}
