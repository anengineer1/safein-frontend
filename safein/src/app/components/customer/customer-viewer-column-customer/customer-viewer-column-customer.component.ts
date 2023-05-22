import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entityclasses/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
	selector: 'app-customer-viewer-column-customer',
	templateUrl: './customer-viewer-column-customer.component.html',
	styleUrls: ['./customer-viewer-column-customer.component.scss']
})
export class CustomerViewerColumnCustomerComponent implements OnInit {

	customer: Customer | undefined | null = null;
	customerList: Customer[] = [];

	constructor(private customerService: CustomersService) {

	}

	assignCustomer(customer: Customer): void {
		this.customer = customer;
	}

	ngOnInit(): void {
		this.getAllCustomers();
	}

	getAllCustomers(): void {
		this.customerService.listAllCustomers().subscribe(
			(customers: Customer[]): void => {
				this.customerList = customers;
			},
			(error: any): void => {
				console.log(error);
			}
		)
	}

	listCustomerById(id: any) {
		if (id) {
			this.customerService.getCustomerById(id).subscribe(
				(customers: Customer): void => {
					this.customerList = [customers];
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllCustomers();
		}
	}

	listCustomerByMedia(media: any): void {
		if (media) {
			this.customerService.getCustomerByMedia(media).subscribe(
				(customers: Customer[]): void => {
					this.customerList = customers;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllCustomers();
		}
	}

	listCustomerByEmail(email: any): void {
		if (email) {
			this.customerService.getCustomerByEmail(email).subscribe(
				(customers: Customer[]): void => {
					this.customerList = customers;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllCustomers();
		}
	}

	listCustomerByDoc(doc: string): void {
	    if (doc) {
		let splittedDoc:string[] = doc.split("/") ;
			this.customerService.getCustomerByDoc(splittedDoc[0], splittedDoc[1]).subscribe(
				(customers: Customer[]): void => {
					this.customerList = customers;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllCustomers();
		}
	}
}
