import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { UserReadComponent } from '../../user-account/user-read/user-read.component';
import { SwitchModalService } from 'src/app/_services/switch-modal.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/entityclasses/customer';
import { BookingData } from 'src/app/entityclasses/booking-data';
import { CustomersService } from '../../../services/customers.service';
import { BookingsService } from 'src/app/_services/bookings.service';
import { HandlesService } from 'src/app/_services/handles.service';
import { Handles } from 'src/app/entityclasses/handles';


@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {


	//Control Modal attributes
	showModal = false;

	//JWT
	private roles: string[] = [];
	isLoggedIn = false;
	showAdminBoard = false;
	showModeratorBoard = false;
	username?: string;
	role?: string;
	customer: Customer | undefined | null = null;
	booking: BookingData | undefined |null = null;
	numberCustomers: number = 0;
	numberHandles: number = 0;

	//Constructor with TokenStorageService as a parameter
	constructor(private tss: TokenStorageService, private modalService: SwitchModalService, private router:Router, private customersService:CustomersService, private handleService: HandlesService){ 
		
		//MODAL
		this.showModal = false;
	}

	/* When load the component check the token and if user is logged assign boards. */
	ngOnInit(): void {

		this.modalService.$modal.subscribe((value) => { this.showModal = value });
		//SIGNIN
		this.isLoggedIn = !!this.tss.getToken();

		if (this.isLoggedIn) {
			const user = this.tss.getUser();
			this.roles = user.roles;
			this.role = user.role;

			//TODO: load data info in profile
			//this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
			//this.showModeratorBoard = this.roles.includes('ROLE_EDITOR');

			this.username = user.username;

					//Get Numbers of topbar: bookings and customers
		this.getAllCustomers();
		this.listAllHandles();
		}


	}

	/* Function to User Logout */
	logout(): void {
		//Clear the session storage
		this.tss.signOut();
		//Reload the site but how is not signed redirect to account login
		this.router.navigate(['account']);
		//window.location.reload();
	}

	/* Function to Open a Modal as a component */
	openModal() {
		this.showModal = true;
	}
	/* Function to Close a Modal as a component */
	closeModal() {
		this.showModal = false;
	}

	/* Functions to get number of bookings and customers*/
	getAllCustomers(): void {
		this.customersService.listAllCustomers().subscribe(
			(customers: Customer[]): void => {
				 //console.log(customers.length);
				this.numberCustomers = customers.length;
			},
			(error: any): void => {
				console.log(error);
			}
		)
	}

	listAllHandles() {
		this.handleService.listAllHandles().subscribe(
			{
				next: (handles: Handles[]): void => {
				    this.numberHandles = handles.length;
				},
				error: (error: any): void => { console.log(error) }
			}
		)
	}

}
