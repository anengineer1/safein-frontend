import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { SwitchModalService } from 'src/app/_services/switch-modal.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit{


  /* Atributes object user */
  user:any = {};

  //Control elements readonly or edit
   isEditable:boolean =true;
   disabledValue: boolean= false;
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
     this.isEditable == true;
     this.profileForm.reset();
     //window.location.reload();
   }
 

}
