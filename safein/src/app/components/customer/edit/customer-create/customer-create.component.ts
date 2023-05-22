import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entityclasses/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit{
  customerslist: Customer[] = [];

  constructor(private customers:CustomersService) {}

ngOnInit(): void {
  this.saveCustomer();
    
}
saveCustomer(){
  this.customers.create(this.customers).subscribe((customers: Customer[]): void => {
    this.customerslist = customers;
  },
  (error: any): void => {
    console.log(error);
  });
}

}
