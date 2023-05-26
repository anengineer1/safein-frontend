import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/_services/hotels.service';
import { RoomsService } from 'src/app/_services/rooms.service';
import { Hotel } from 'src/app/entityclasses/hotel';
import { Room } from 'src/app/entityclasses/room';

@Component({
	selector: 'app-room-hotels-edit',
	templateUrl: './room-hotels-edit.component.html',
	styleUrls: ['./room-hotels-edit.component.scss']
})
export class RoomHotelsEditComponent implements OnInit {

	roomsList: Room[] = [];
	currentRoom: Room = new Room;
	selectedRoomId: number = 0;
	hotelList: Hotel[] = [];
	currentHotel: Hotel = new Hotel;

	constructor(private roomsService: RoomsService,
		private hotelsService: HotelsService) {
	}
	ngOnInit(): void {
		this.getAllRooms();
		this.getAllHotels();
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

	updateExistingRoom() {
		this.currentRoom.hotel = this.currentHotel;
		console.log(this.currentRoom);
		this.roomsService.updateRoom(this.currentRoom.id, this.currentRoom).subscribe({
			next: response => {
				console.log(response);
			},

			error: error => { console.log(error) }
		}
		)
	}
}
