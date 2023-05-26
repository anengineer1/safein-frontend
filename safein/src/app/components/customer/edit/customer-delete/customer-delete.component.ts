import { Component } from '@angular/core';
import { Country } from 'src/app/entityclasses/country';
import { Customer } from 'src/app/entityclasses/customer';
import { CountriesService } from 'src/app/services/countries.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.scss']
})
export class CustomerDeleteComponent {

  customerslist: Customer[] = [];
  countrylist: Country[]=[];
  country:Country = new Country;
  customer: Customer = new Customer;

  constructor(private customers:CustomersService,private countries: CountriesService) {}

  deleteCustomers(){
    this.customers.delete(this.customer).subscribe((customers: Customer[]): void => {
    },
    (error: any): void => {
      console.log(error);
    })
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
  
}
