import { Country } from "./country";

export class City {
	id: number;
	longitude: number;
	latitude: number;
	name: string;
	country: Country;

	constructor() {
		this.id = 0;
		this.latitude = 0;
		this.longitude = 0;
		this.name = '';
		this.country = new Country();
	}
}
