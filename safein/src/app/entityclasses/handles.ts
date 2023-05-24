import { BookingData } from "./booking-data";
import { Room } from "./room";

export class Handles {
	id: number;
	arrivalDate: Date;
	departureDate: Date;
	booking: BookingData;
	room: Room;

	constructor() {
		this.id = 0;
		this.arrivalDate = new Date;
		this.departureDate = new Date;
		this.booking = new BookingData;
		this.room = new Room;
	}
}
