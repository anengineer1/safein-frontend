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

    
}
saveCustomer(code:Customer){
  this.customers.create(code).subscribe((customers: Customer[]): void => {
   this.customerslist = customers;
console.log(code);
  },
  (error: any): void => {
    console.log(error);
  });
}

}
