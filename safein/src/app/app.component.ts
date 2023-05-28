import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/auth/token-storage.service';
import { SwitchModalService } from './_services/switch-modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'safein';


	//Control Modal attributes
	showModal = false;

	//JWT
	private roles: string[] = [];
	isLoggedIn = false;
	showAdminBoard = false;
	showModeratorBoard = false;
	username?: string;
	role?: string;

	//Constructor with TokenStorageService as a parameter
	constructor(private tss: TokenStorageService, private router:Router) { 
		
		//MODAL
		this.showModal = false;
	}

	/* When load the component check the token and if user is logged assign boards. */
	ngOnInit(): void {

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
		}
	}

}
