import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/entityclasses/country';
import { Customer } from 'src/app/entityclasses/customer';
import { CountriesService } from 'src/app/services/countries.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.scss']
})
export class CustomerDeleteComponent implements OnInit {

  ngOnInit(): void {
    this.getAllCountries();
    this.getAllCustomers();
  }
  customerli: Customer[] = [];
  countrylist: Country[] = [];
  country: Country = new Country;
  customerobj: Customer = new Customer;

  constructor(private customers: CustomersService, private countries: CountriesService) { }

  deleteCustomers() {
    console.log("delete " + this.customerobj, this.customerobj.id);
    this.customers.delete(this.customerobj.id).subscribe({
      next: response => {
        console.log(response);
      },
      error: (error: any): void => {
        console.log(error);
      }})
  }

  getAllCustomers() {
    this.customers.listAllCustomers().subscribe(
      (customers: Customer[]): void => {
        this.customerli = customers;
      },
      (error: any): void => {
        console.log(error);
      }
    )
  }
  getAllCountries() {
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
