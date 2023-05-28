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

/*-------------------------EXAMPLE HANDLE------------------------
{
    "id": 4,
    "arrivalDate": "2023-06-17T12:00:00",
    "departureDate": "2023-08-14T12:00:00",
    "booking": {
      "id": 1,
      "amount": 250,
      "numPeople": 1,
      "customers": {
        "id": 1,
        "name": "Maks Levin",
        "email": "mklevis@gmail.com",
        "pressMedia": "LB.ua",
        "docIdentifier": "DNI",
        "numIdentifier": "5263383944",
        "country": {
          "id": 1,
          "countryCode": "BT",
          "countryName": "Bhutan",
          "latitude": 49,
          "longitude": 32,
          "situation": "War"
        },
        "phonenumber": "+341725923"
      },
      "user": {
        "id": 1,
        "username": "marraya",
        "password": "Ma@ara",
        "email": "mrraynet@gmail.com",
        "nomApels": "Maria Raices"
      },
      "payed": true,
      "pendingPay": false
    },
    "room": {
      "id": 3,
      "numPeople": 3,
      "code": "302",
      "pricePerNight": 59.99,
      "internetType": "Fiber",
      "hasTerrace": true,
      "hotel": {
        "id": 1,
        "name": "Hotel Palace",
        "phonenumber": "+34555555555",
        "email": "reboca@gmail.com",
        "address": "Arbeitzer street 5",
        "latitude": 37.7749,
        "longitude": -122.4194,
        "securityLevel": "Diplomatic coverage and private security",
        "energySuficient": true,
        "city": {
          "id": 1,
          "latitude": 37.7749,
          "longitude": -122.4194,
          "name": "Kirtze",
          "country": {
            "id": 1,
            "countryCode": "BT",
            "countryName": "Bhutan",
            "latitude": 49,
            "longitude": 32,
            "situation": "War"
          }
        }
      },
      "smoker": false
    }
    -----------------------------------------------------*/