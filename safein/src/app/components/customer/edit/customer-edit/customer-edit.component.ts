import { Component, OnInit } from "@angular/core";
import { Country } from "src/app/entityclasses/country";
import { Customer } from "src/app/entityclasses/customer";
import { CustomersService } from "src/app/services/customers.service";

@Component({
  selector: "app-customer-edit",
  templateUrl: "./customer-edit.component.html",
  styleUrls: ["./customer-edit.component.scss"],
})
export class CustomerEditComponent implements OnInit {
  customerli: Customer[] = [];
  country: Country = new Country;
  countrylist : Country [] = [];
  ngOnInit(): void {}

  constructor(private customer: CustomersService) {}


  updateCustomer(code: Customer, id: any) {
    this.customer.update(code, id).subscribe(
      (customer: Customer[]): void => {
        console.log(code, id);
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
}
