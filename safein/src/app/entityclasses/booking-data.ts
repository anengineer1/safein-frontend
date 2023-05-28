import { Customer } from "./customer";
import { Suser } from "./suser";

export class BookingData {
    id: number;
    amount: number;
    numPeople: number;
    pendingPay: boolean;
    payed: boolean;
    customers: Customer;
    suser: Suser;

    constructor() {
	
	this.id = 0;
	this.amount = 0;
	this.numPeople = 0;
	this.pendingPay = false;
	this.payed = false;
	this.customers = new Customer;
	this.suser = new Suser;
    }
}

/*-----------------------------------------BOOKING EXAMPLE-----------------------
"id": 3,
  "amount": 454.9,
  "numPeople": 2,
  "customers": {
    "id": 3,
    "name": "Frédéric Leclerc-Imhoff",
    "email": "freddy@gmail.com",
    "pressMedia": "BFMTV",
    "docIdentifier": "DNI",
    "numIdentifier": "5263374744",
    "country": {
      "id": 3,
      "countryCode": "ID",
      "countryName": "Indonesia",
      "latitude": -5,
      "longitude": 120,
      "situation": "Natural Disaster"
    },
    "phonenumber": "+341445623"
  },
  "user": {
    "id": 3,
    "username": "NicoGico",
    "password": "Ni#$Gii",
    "email": "nicogi@gmail.com",
    "nomApels": "Nicolas Gimenez"
  },
  "payed": true,
  "pendingPay": false
}
---------------------------------------------------------------------------------*/