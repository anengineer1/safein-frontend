export class Country {
    id: number;
    countryCode: string;
    countryName: string;
    latitude: number;
    longitude: number;
    situation: string;

    constructor() {
	this.id = 0;
	this.countryCode = "";
	this.countryName = "";
	this.latitude = 0;
	this.longitude = 0;
	this.situation = "War";
    }
}
