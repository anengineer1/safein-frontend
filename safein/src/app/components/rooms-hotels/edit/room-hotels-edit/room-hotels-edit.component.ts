import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/_services/hotels.service';
import { RoomsService } from 'src/app/_services/rooms.service';
import { City } from 'src/app/entityclasses/city';
import { Hotel } from 'src/app/entityclasses/hotel';
import { Room } from 'src/app/entityclasses/room';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
	selector: 'app-room-hotels-edit',
	templateUrl: './room-hotels-edit.component.html',
	styleUrls: ['./room-hotels-edit.component.scss']
})
export class RoomHotelsEditComponent implements OnInit {

	roomsList: Room[] = [];
	currentRoom: Room = new Room;
	currentHotelForRoom: Hotel = new Hotel;
	selectedRoomId: number = 0;
	hotelList: Hotel[] = [];
	currentHotel: Hotel = new Hotel;
	// City for update
	cityList: City[] = [];
	currentCityForHotelUpdate: City = new City;
	// Current Hotel for Room


	constructor(private roomsService: RoomsService,
		private hotelsService: HotelsService,
		private citiesService: CitiesService) {
	}
	ngOnInit(): void {
		this.getAllRooms();
		this.getAllHotels();
		this.getAllCities();
	}

	getAllCities() {
		this.citiesService.listAllCites().subscribe(
			{
				next: (cities: City[]) => {
					this.cityList = cities;
				},
				error: error => {
					console.log(error);
				}
			}
		)
	}

	getAllHotels(): void {
		this.hotelsService.listAllHotels().subscribe(
			{
				next: (hotels: Hotel[]) => {
					this.hotelList = hotels;
				},
				error: error => {
					console.log(error);
				}
			}
		)
	}

	getAllRooms(): void {
		this.roomsService.listAllRooms().subscribe(
			{
				next: (rooms: Room[]) => {
					this.roomsList = rooms;
					console.log(this.roomsList);
				},
				error: error => { console.log(error) }
			}
		)
	}

	updateExistingRoom(): void {
		if (this.currentHotelForRoom.id !== 0) {
			this.currentRoom.hotel = this.currentHotelForRoom;
		}

		console.log(this.currentRoom);
		this.roomsService.updateRoom(this.currentRoom.id, this.currentRoom).subscribe({
			next: response => {
				console.log(response);
			},

			error: error => { console.log(error) }
		}
		)
	}

	updateExistingHotel(): void {
		if (this.currentCityForHotelUpdate.id !== 0) {
			this.currentHotel.city = this.currentCityForHotelUpdate;
		}

		console.log(this.currentHotel);
		this.hotelsService.updateHotel(this.currentHotel.id, this.currentHotel).subscribe({
			next: response => {
				console.log(response);
			},

			error: error => { console.log(error) }
		}
		)
	}
}
