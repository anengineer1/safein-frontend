import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/_services/hotels.service';
import { RoomsService } from 'src/app/_services/rooms.service';
import { City } from 'src/app/entityclasses/city';
import { Hotel } from 'src/app/entityclasses/hotel';
import { Room } from 'src/app/entityclasses/room';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
	selector: 'app-room-hotels-create',
	templateUrl: './room-hotels-create.component.html',
	styleUrls: ['./room-hotels-create.component.scss']
})
export class RoomHotelsCreateComponent implements OnInit {
	citiesobj : City = new City;
	citieslist: City[]=[];
	currentRoom: Room = new Room;
	hotelList: Hotel[] = [];
	hotelId: any = 0;
	currentHotelForInsertion: Hotel = new Hotel;
	currentHotelForRoom: Hotel = new Hotel;


	constructor(private roomsService: RoomsService, private hotelService: HotelsService,private citiservice: CitiesService ) {
	}


	assignHotel(hotel: Hotel) {

		this.currentHotelForInsertion = hotel;
	}

	ngOnInit(): void {
		this.getAllCity();
		this.hotelService.listAllHotels().subscribe(
			{
				next: (hotels: Hotel[]): void => {
					this.hotelList = hotels;
					console.log(this.hotelList);
				},
				error: (error: any): void => { console.log(error) }
			}
		)
	}

	getHotelById(id: any) {
		this.hotelService.getHotelById(id).subscribe(
			{
				next: (hotel: Hotel): void => {
					this.currentHotelForRoom = hotel;
					console.log(this.hotelList);
				},
				error: (error: any): void => { console.log(error) }
			}
		)
	}


	showCapturedClass() {
		this.currentRoom.hotel = this.currentHotelForRoom;
		console.log(this.currentRoom);
	}

	insertNewRoom() {
		this.currentRoom.hotel = this.currentHotelForInsertion;
		this.roomsService.createRoom(this.currentRoom).subscribe({
			next: response => {
				console.log(response);
			},

			error: error => { console.log(error) }
		}
		)
	}
	saveHotel(){
		this.currentHotelForInsertion.city = this.citiesobj;
		console.log(this.hotelList+" obtain hotels");

		this.hotelService.create(this.currentHotelForInsertion).subscribe({
			next: response => {
				console.log(response);
			},
			error: error => { console.log(error) }
		})
	}
	getAllCity(){
		this.citiservice.listAllCites().subscribe(
		  (citiservice: City[]): void => {
			this.citieslist = citiservice;
			console.log(this.citieslist);

		  },
		  (error: any): void => {
			console.log(error);
		  }
		)
	  }
}
