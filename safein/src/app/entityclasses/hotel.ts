import { City } from "./city";

export class Hotel {
	id: number;
	name: string;
	phonenumber: string;
	email: string;
	address: string;
	latitude: number;
	longitude: number;
	securityLevel: string;
	energySuficient: boolean;
	city: City;

	constructor() {
		this.id = 0;
		this.name = '';
		this.phonenumber = '';
		this.email = '';
		this.address = '';
		this.latitude = 0;
		this.longitude = 0;
		this.securityLevel = "Diplomatic coverage and private security";
		this.energySuficient = true;
		this.city = new City;
	}
}
