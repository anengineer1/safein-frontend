import { Country } from "./country";

export class Customer {
	id: number;
	name: string;
	email: string;
	pressMedia: string;
	docIdentifier: string;
	numIdentifier: string;
	phonenumber: string;
	country: Country;

	constructor() {
		this.id = 0;
		this.name = '';
		this.email = '';
		this.pressMedia = '';
		this.docIdentifier = '';
		this.numIdentifier = '';
		this.country = new Country;
		this.phonenumber = '';
	}
}
