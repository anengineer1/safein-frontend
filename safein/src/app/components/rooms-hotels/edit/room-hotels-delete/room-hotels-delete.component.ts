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
			(hotelsService: Hotel[]): void => {
			  this.hotelList = hotelsService;
			  console.log(this.hotelList);
			},
			(error: any): void => {console.log(error);
			}
		  )
	}

	getAllRooms(): void {
		this.roomsService.listAllRooms().subscribe(
			(roomsService: Room[]): void => {
			  this.roomsList = roomsService;
			  console.log(this.roomsList)
			},
			(error: any): void => {console.log(error);
			}
		  )
	}

	/* Delete Hotel*/
	deleteHotel() {
/* 
		this.countriesService.deleteCountry(this.country, this.country.id).subscribe(
			response => {
			  console.log(response);
			  alert("Country  "+ this.country.countryName +" deleted successfully");
			},
			(error: any): void => {
			  console.log(error);
			}) */


		console.log("delete " + this.currentHotel, this.currentHotel.id);
		this.hotelsService.deleteHotel(this.currentHotel, this.currentHotel.id).subscribe(response => {
			alert("Hotel : "+ this.currentHotel.name +" deleted successfully");
		},
			(error: any): void => {
				console.log(error);
				alert("Error deleting hotel)");
			})
	}

	/* Delete Hotel*/
	deleteRoom() {

		this.roomsService.deleteRoom(this.currentRoom, this.currentRoom.id).subscribe(
			response => {
			  //console.log(response);
			  alert("Room  :"+ this.currentRoom.code +" deleted successfully");
			},
			(error: any): void => {
			  console.log(error);
			})
			
		/* 
		console.log("delete " + this.currentRoom, this.currentRoom.id);
		this.roomsService.deleteRoom(this.currentRoom, this.currentRoom.id).subscribe((room: Room[]): void => {
			alert("Room  :"+ this.currentRoom.code +" deleted successfully");
		},
			(error: any): void => {
				console.log(error);
				alert("Error deleting Room)");
			})
		}) */
	}

}
