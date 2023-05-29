import { Component, OnInit, ViewChild } from '@angular/core';
import { SwitchModalService } from 'src/app/_services/switch-modal.service';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.scss']
})

//Class Profile of User
export class UserReadComponent implements OnInit {

  /* Atributes object user */
 user:any = {};

 //Control elements readonly or edit
  isEditable:boolean =true;
  disabledValue: boolean= true;
  @ViewChild('profileForm')
  public profileForm!: NgForm;

  constructor(private ts: TokenStorageService, private modalService: SwitchModalService, private router: Router) {

      //Get the user from the sessionStorage  
      this.user = this.ts.getUser();
  }

  ngOnInit(): void {
    
    //Modal emit true(visible)
    this.modalService.$modal.emit(true);

    //Check the status od editable field
    (this.isEditable) ? this.disabledValue==false : this.disabledValue==true;

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
    //this.isEditable == true;
    //this.profileForm.reset();
    this.router.navigate(['user-profile-update']);
    //window.location.reload();
  }

}
