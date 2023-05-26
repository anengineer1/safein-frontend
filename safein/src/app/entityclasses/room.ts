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
