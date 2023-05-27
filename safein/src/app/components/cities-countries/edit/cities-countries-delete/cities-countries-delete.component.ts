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

  //Attributes
  cities : City = new City;
  country: Country = new Country;
  countrylist : Country [] = [];
  citieslist: City [] = [];
  customerslist: Customer [] = [];

  //Constructor
  constructor(private countries: CountriesService,private citiesserv: CitiesService,private customers: CustomersService) {}

  //cycle phase ngOnInit
  ngOnInit(): void {
    this.getAllCountries();
    this.getAllCustomers();
    this.getAllCity();
  }

  //delete city by id
  deleteCity(): void{
    this.citiesserv.deleteCity(this.cities,this.cities.id).subscribe(
      response => {
        console.log(response);
        alert("City deleted successfully");
    },
    (error: any): void => {console.log(error);}
    );
  }  
  
  //delete country by id
  deleteCountry(){
    this.countries.deleteCountry(this.country, this.country.id).subscribe(
      response => {
        console.log(response);
        alert("Country deleted successfully");
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
