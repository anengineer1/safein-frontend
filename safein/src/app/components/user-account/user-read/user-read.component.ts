import { Component, OnInit } from '@angular/core';
import { SwitchModalService } from 'src/app/_services/switch-modal.service';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.scss']
})

//Class Profile of User
export class UserReadComponent implements OnInit {

  /* Atributes object user */
 user:any = {};

  constructor(private ts: TokenStorageService, private modalService: SwitchModalService, private router: Router) {

      //Get the user from the sessionStorage  
      this.user = this.ts.getUser();
  }

  ngOnInit(): void {

  }

  /* Close Modal emit false to service --> topbar*/
  closeModal() {
    this.modalService.$modal.emit(false);
  }


	/* Function to User Logout */
	logout(): void {
		//Clear the session storage
		this.ts.signOut();
		//how is not signed redirect to account login
		this.router.navigate(['account']);
	}

  editProfile(): void {

  }

}
