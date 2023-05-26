import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/_services/bookings.service';
import { BookingData } from 'src/app/entityclasses/booking-data';
import { Customer } from 'src/app/entityclasses/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
	selector: 'app-booking-edit',
	templateUrl: './booking-edit.component.html',
	styleUrls: ['./booking-edit.component.scss']
})
export class BookingEditComponent implements OnInit {

	currentBookingForUpdate: BookingData = new BookingData;
	bookingListUpdate: BookingData[] = [];
	currentCustomerForUpdate: Customer = new Customer;
	customerListForUpdate: Customer[] = [];


	constructor(private bookingService: BookingsService,
		private customerService: CustomersService) {
	}

	ngOnInit(): void {
		this.getAllBookingData();
		this.getAllCustomerData();
	}

	getAllBookingData(): void {
		this.bookingService.listAllBookingDatas().subscribe({
			next: (bookings: BookingData[]) => {
				this.bookingListUpdate = bookings;
				console.log(this.bookingListUpdate);
			},
			error: error => {
				console.log(error);
			}
		}
		)
	}

	getAllCustomerData(): void {
		this.customerService.listAllCustomers().subscribe({
			next: (customers: Customer[]) => {
				this.customerListForUpdate = customers;
				console.log(this.customerListForUpdate);
			},
			error: error => {
				console.log(error);
			}
		}
		)
	}

	updateBooking(): void {
		this.currentBookingForUpdate.customers = this.currentCustomerForUpdate;
		console.log(this.currentBookingForUpdate);
		this.bookingService.updateBookingData(this.currentBookingForUpdate.id, this.currentBookingForUpdate).subscribe({
			next: response => {
				console.log(response);
			},
			error: error => {
				console.log(error);
			}
		}
		)
	}
}
