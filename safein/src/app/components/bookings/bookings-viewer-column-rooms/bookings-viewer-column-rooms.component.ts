import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/_services/rooms.service';
import { Room } from 'src/app/entityclasses/room';

@Component({
	selector: 'app-bookings-viewer-column-rooms',
	templateUrl: './bookings-viewer-column-rooms.component.html',
	styleUrls: ['./bookings-viewer-column-rooms.component.scss']
})
export class BookingsViewerColumnRoomsComponent implements OnInit {

	room: Room | undefined | null = null;
	roomList: Room[] = [];

	constructor(private roomsService: RoomsService) {}

	ngOnInit(): void {
		this.getAllRooms();
	}

	assignRoom(room: Room): void {
		this.room = room;
	}

	getAllRooms() {
		this.roomsService.listAllRooms().subscribe(
			(countries: Room[]): void => {
				this.roomList = countries;
			},
			(error: any): void => {
				console.log(error);
			}
		)
	}

	listRoomsById(id: string): void {
		if (id) {
			this.roomsService.getRoomById(id).subscribe(
				(room: Room): void => {
					this.roomList = [room];
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllRooms();
		}
	}

	listRoomsByHotelId(id: string): void {
		if (id) {
			this.roomsService.getRoomsByHotelId(id).subscribe(
				(room: Room[]): void => {
					this.roomList = room;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllRooms();
		}
	}

	listRoomsByNumPeople(numPeople: string): void {
		if (numPeople) {
			this.roomsService.getRoomsByNumberOfPeople(numPeople).subscribe(
				(room: Room[]): void => {
					this.roomList = room;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllRooms();
		}
	}

	listRoomsByInternetType(internetType: string): void {
		if (internetType) {
			this.roomsService.getRoomsByInternetType(internetType).subscribe(
				(room: Room[]): void => {
					this.roomList = room;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllRooms();
		}
	}

	listRoomsBySmoker(smoker: string): void {
		if (smoker) {
			this.roomsService.getRoomsByIsSmoker(smoker).subscribe(
				(room: Room[]): void => {
					this.roomList = room;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllRooms();
		}
	}

	listRoomsByHasTerrace(hasTerrace: string): void {
		if (hasTerrace) {
			this.roomsService.getRoomsByHasTerrace(hasTerrace).subscribe(
				(room: Room[]): void => {
					this.roomList = room;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllRooms();
		}
	}

	listRoomsByNumpeopleAndHotelId(hotelid_numpeople: string): void {
		let splittedHotelIdNumpeople: string[] = hotelid_numpeople.split("/");
		if (hotelid_numpeople) {
			this.roomsService.getRoomsByHotelIdAndNumPeople(splittedHotelIdNumpeople[0], splittedHotelIdNumpeople[1]).subscribe(
				(room: Room[]): void => {
					this.roomList = room;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllRooms();
		}
	}
}
