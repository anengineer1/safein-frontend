import { Component, OnInit } from "@angular/core";
import { Country } from "src/app/entityclasses/country";
import { Customer } from "src/app/entityclasses/customer";
import { CountriesService } from "src/app/services/countries.service";
import { CustomersService } from "src/app/services/customers.service";

@Component({
  selector: "app-customer-edit",
  templateUrl: "./customer-edit.component.html",
  styleUrls: ["./customer-edit.component.scss"],
})
export class CustomerEditComponent implements OnInit {
  customerli: Customer[] = [];
  country: Country = new Country;
  customerobj: Customer = new Customer;
  countrylist : Country [] = [];
  
  ngOnInit(): void {
    this.getAllCountries();
    this.getAllCustomers();
  }

  constructor(private customer: CustomersService,private countries: CountriesService) {}


  updateCustomer() {
   console.log(this.customerobj);
    this.customer.update(this.customerobj,this.customerobj.id).subscribe(
      (customers: Customer[]): void => {
        console.log(this.customerobj);
      },
      (error: any): void => {
        console.log(error);
      }
    );
  }

  getAllCustomers(){
    this.customer.listAllCustomers().subscribe(
      (customers: Customer[]): void => {
        this.customerli = customers;
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
