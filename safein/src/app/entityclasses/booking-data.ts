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
