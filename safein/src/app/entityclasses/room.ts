import { Hotel } from "./hotel";

export class Room {

    id: number;
    numPeople: number;
    code: string;
    pricePerNight: number;
    internetType: string;
    hasTerrace: boolean;
    smoker: boolean;
    hotel: Hotel;

    constructor() {
	this.id = 0;
	this.numPeople = 0;
	this.code= '';
	this.pricePerNight = 0;
	this.internetType = '';
	this.hasTerrace = false;
	this.smoker = false;
	this.hotel = new Hotel;
    }    
}


/*---------------------------------ROOM EXAMPLE -------------------------------------

{
    "id": 4,
    "numPeople": 2,
    "code": "145",
    "pricePerNight": 59.99,
    "internetType": "Fiber",
    "hasTerrace": true,
    "hotel": {
        "id": 1,
        "name": null,
        "phonenumber": null,
        "email": null,
        "address": null,
        "latitude": 0.0,
        "longitude": 0.0,
        "securityLevel": null,
        "energySuficient": false,
        "city": null
    },
    "smoker": true
}
-------------------------------------------------------------------------------------*/