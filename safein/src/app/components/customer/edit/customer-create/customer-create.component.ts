import { Component, OnInit } from "@angular/core";
import { Country } from "src/app/entityclasses/country";
import { Customer } from "src/app/entityclasses/customer";
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

  constructor(private customers: CustomersService) {}

  ngOnInit(): void {}
  saveCustomer() {
    this.customers.create(this.customer).subscribe(
      (customers: Customer[]): void => {
        this.customerslist = customers;
        console.log(this.customer);
      },
      (error: any): void => {
        console.log(error);
      }
    );
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
}
