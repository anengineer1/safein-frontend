import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/_services/hotels.service';
import { Hotel } from 'src/app/entityclasses/hotel';

@Component({
	selector: 'app-bookings-viewer-column-hotels',
	templateUrl: './bookings-viewer-column-hotels.component.html',
	styleUrls: ['./bookings-viewer-column-hotels.component.scss']
})
export class BookingsViewerColumnHotelsComponent implements OnInit {

	hotel: Hotel | undefined | null = null;
	hotelList: Hotel[] = [];

	constructor(private hotelService: HotelsService) {}


	ngOnInit(): void {
		this.listAllHotels();
	}

	assignHotel(hotel: Hotel): void {
		this.hotel = hotel;
	}

	listAllHotels(): void {
		this.hotelService.listAllHotels().subscribe(
			(hotels: Hotel[]): void => {
				this.hotelList = hotels;
			},
			(error: any): void => {
				console.log(error);
			}
		)
	}

	listHotelsById(id: string): void {
		if (id) {
			this.hotelService.getHotelById(id).subscribe(
				(hotels: Hotel): void => {
					this.hotelList = [hotels];
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.listAllHotels();
		}
	}


	listHotelsByCityId(id: string): void {
		if (id) {
			this.hotelService.getHotelByCityId(id).subscribe(
				(hotels: Hotel[]): void => {
					this.hotelList = hotels;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.listAllHotels();
		}
	}

	listHotelsByEnergySuficient(energySuficiency: string): void {
		if (energySuficiency) {
			this.hotelService.getHotelByEnergySuficient(energySuficiency).subscribe(
				(hotels: Hotel[]): void => {
					this.hotelList = hotels;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.listAllHotels();
		}
	}

	listHotelsBySecurityLevel(secLevel: string): void {
		if (secLevel) {
			this.hotelService.getHotelBySecurityLevel(secLevel).subscribe(
				(hotels: Hotel[]): void => {
					this.hotelList = hotels;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.listAllHotels();
		}
	}
}
