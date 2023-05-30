import { Component, OnInit } from "@angular/core";
import { Country } from "src/app/entityclasses/country";
import { Customer } from "src/app/entityclasses/customer";
import { CountriesService } from "src/app/services/countries.service";
import { CustomersService } from "src/app/services/customers.service";

@Component({
  selector: "app-customer-create",
  templateUrl: "./customer-create.component.html",
  styleUrls: ["./customer-create.component.scss"],
})
export class CustomerCreateComponent implements OnInit {
  
  customerslist: Customer[] = [];
  customer: Customer = new Customer();
  country: Country = new Country();
  countrylist: Country[] = [];

  constructor(private customers: CustomersService,private countries: CountriesService ) {}

  ngOnInit(): void {
    this.getAllCustomers();
    this.getAllCountries();
  }

  saveCustomer() {
    this.customers.create(this.customer).subscribe(
      (customers: Customer[]): void => {
        this.customerslist = customers;
        console.log(this.customer);
        alert("Customer:"+ this.customer.name +"create successfully");
      },
      (error: any): void => {
        console.log(error);
        alert('Error creating Customer: ' + error);
      }
    );
    console.log(this.customer);
  }
    //Obtain full lista of customer
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
