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
export class CitiesCountriesDeleteComponent implements OnInit{
  ngOnInit(): void {
    this.getAllCountries();
    this.getAllCustomers();
    this.getAllCity();
  }
  constructor(private countries: CountriesService,private citiesserv: CitiesService,private customers: CustomersService) {}

  cities : City = new City;
  countryobj: Country = new Country;
  countrylist : Country [] = [];
  citieslist: City [] = [];
  customerslist: Customer [] = [];

  deleteCity(){
    this.citiesserv.delete(this.cities,this.cities.id).subscribe((citiesserv: City[]): void => {
      
    },
    (error: any): void => {
      console.log(error);
    })
  }  
  
  deleteCountry(){
    this.countries.delete(this.countryobj.id)
    .subscribe((countries: Country[]): void => {
    },
    (error: any): void => {
      console.log(error);
    })
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
  
  getAllCustomers(){
    this.customers.listAllCustomers().subscribe(
      (customers: Customer[]): void => {
        this.customerslist = customers;
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
