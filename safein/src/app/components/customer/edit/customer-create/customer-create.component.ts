import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/entityclasses/country';
import { Customer } from 'src/app/entityclasses/customer';
import { CountriesService } from 'src/app/services/countries.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
	selector: 'app-customer-create',
	templateUrl: './customer-create.component.html',
	styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

	customer: Customer = new Customer;
	customerList: Customer[] = [];
	country: Country | undefined | null = null;
	countryList: Country[] = [];

	constructor(private customerService: CustomersService,
		    private countriesService: CountriesService) {

	}
    ngOnInit(): void {
	this.getAllCustomers()
		this.getAllCountries();
	}

	getAllCustomers() {
		this.customerService.listAllCustomers().subscribe(
			(customers: Customer[]): void => {
				this.customerList = customers;
			},
			(error: any): void => {
				console.log(error);
			}
		)
	}

	getAllCountries() {
		this.countriesService.listAllCountries().subscribe(
			(countries: Country[]): void => {
				this.countryList = countries;
			},
			(error: any): void => {
				console.log(error);
			}
		)
	}
}
