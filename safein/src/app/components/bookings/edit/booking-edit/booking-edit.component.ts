import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/_services/bookings.service';
import { HandlesService } from 'src/app/_services/handles.service';
import { RoomsService } from 'src/app/_services/rooms.service';
import { BookingData } from 'src/app/entityclasses/booking-data';
import { Customer } from 'src/app/entityclasses/customer';
import { Handles } from 'src/app/entityclasses/handles';
import { Room } from 'src/app/entityclasses/room';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
	selector: 'app-booking-edit',
	templateUrl: './booking-edit.component.html',
	styleUrls: ['./booking-edit.component.scss']
})
export class BookingEditComponent implements OnInit {

	currentBookingForUpdate: BookingData = new BookingData;
	bookingListUpdate: BookingData[] = [];
	currentHandleForUpdate: Handles = new Handles;
	handleListUpdate: Handles[] = [];
	currentCustomerForUpdate: Customer = new Customer;
	customerListForUpdate: Customer[] = [];
	currentRoomForUpdate: Room = new Room;
	roomListForUpdate: Room[] = [];


	constructor(private bookingService: BookingsService,
		private customerService: CustomersService,
		private handlesService: HandlesService,
		private roomService: RoomsService) {
	}

	ngOnInit(): void {
		this.getAllBookingData();
		this.getAllCustomerData();
		this.getAllHandles();
		this.getAllRooms();
	}

	getAllRooms(): void {
		this.roomService.listAllRooms().subscribe({
			next: (rooms: Room[]) => {
				this.roomListForUpdate = rooms;
				console.log(this.roomListForUpdate);
			},
			error: error => {
				console.log(error);
			}
		}
		)
	}

	getAllHandles(): void {
		this.handlesService.listAllHandles().subscribe({
			next: (handles: Handles[]) => {
				this.handleListUpdate = handles;
				console.log(this.handleListUpdate);
			},
			error: error => {
				console.log(error);
			}
		}
		)
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

	updateHandles(): void {
		this.currentHandleForUpdate.booking = this.currentBookingForUpdate;
		this.currentHandleForUpdate.room = this.currentRoomForUpdate;
		console.log(this.currentHandleForUpdate);
		this.handlesService.updateHandle(this.currentHandleForUpdate.id, this.currentHandleForUpdate).subscribe({
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
