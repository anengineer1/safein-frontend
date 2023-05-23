import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/_services/bookings.service';
import { BookingData } from 'src/app/entityclasses/booking-data';

@Component({
	selector: 'app-bookings-viewer-column-data-bookings',
	templateUrl: './bookings-viewer-column-data-bookings.component.html',
	styleUrls: ['./bookings-viewer-column-data-bookings.component.scss']
})
export class BookingsViewerColumnDataBookingsComponent implements OnInit {

	bookingData: BookingData | undefined | null = null;
	bookingDataList: BookingData[] = [];

	constructor(private bookingsService: BookingsService) {}

	ngOnInit(): void {
	    this.getAllBookingData()
	}

	assignBookingData(booking_data: BookingData): void {
		this.bookingData = booking_data;
	}

	getAllBookingData() {
		this.bookingsService.listAllBookingDatas().subscribe(
			(countries: BookingData[]): void => {
				this.bookingDataList = countries;
			},
			(error: any): void => {
				console.log(error);
			}
		)
	}

}
