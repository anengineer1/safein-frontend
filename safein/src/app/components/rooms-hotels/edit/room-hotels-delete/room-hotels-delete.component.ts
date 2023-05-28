import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/_services/hotels.service';
import { RoomsService } from 'src/app/_services/rooms.service';
import { Hotel } from 'src/app/entityclasses/hotel';
import { Room } from 'src/app/entityclasses/room';

@Component({
  selector: 'app-room-hotels-delete',
  templateUrl: './room-hotels-delete.component.html',
  styleUrls: ['./room-hotels-delete.component.scss']
})
export class RoomHotelsDeleteComponent implements OnInit {

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
				}
			}
		)
	}


}
