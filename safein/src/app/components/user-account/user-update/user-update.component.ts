import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { SwitchModalService } from 'src/app/_services/switch-modal.service';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../../_services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  message: string ='';
  /* Atributes object user get from sessionStorage*/
  user: any = {};

  /* Atributes object user get from endpoint + model*/
  suser: User = {
    id: '',
    username: '',
    password: '',
    email: '',
    nomApels: '',
    role: '',
  };

  //Control elements readonly or edit
  isEditable: boolean = true;
  disabledValue: boolean = false;
  @ViewChild('profileForm')
  public profileForm!: NgForm;

  constructor(private ts: TokenStorageService, private modalService: SwitchModalService, private router: Router, private userService: UserService) {

    //Get the user from the sessionStorage  
    this.user = this.ts.getUser();

  }

  ngOnInit(): void {

    //Modal emit true(visible)
    this.modalService.$modal.emit(true);

    //Check the status od editable field
    (this.isEditable) ? this.disabledValue == false : this.disabledValue == true;
    console.log( this.getUserById(this.user.id));
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

  //CRUD Methods

 //GET: User by id

  getUserById(id: number){
    
console.log(id);
    if(id){
      this.userService.getUserById(id).subscribe(
        {
          next: (userData:User):void => {
            console.log(userData);
            this.suser = userData;
        },
        error: (error:any):void => {
          console.log("Error: Not id:"+error);
        }
      }
      )
    }else{
      console.log("Error: Not id");
    }
  }


  //PUT Methods : Save User Profile
  updateUser(): void {

    this.message  ='';

    const data = {
      id: this.suser.id,
      username: this.suser.username,
      password: this.suser.password,
      email: this.suser.email,
      nomApels: this.suser.nomApels,
      role: this.suser.role,
    };
  
    console.log(data);
    this.userService.update(this.suser.id, data)
    .subscribe(
      response => {
        console.log(response);
        this.message = response.message ? response.message : "User updated successfully";
      },
      error => {
        console.log(error);
      }    
    );
    } 



  // Methods : Save User Profile
   createUser(): void {
    const data = {
    username: this.suser.username,
    password: this.suser.password,
    email: this.suser.email,
    nomApels: this.suser.nomApels,
    role: this.suser.role,
  };

  console.log(data);
  this.userService.create(data)
  .subscribe(
    response => {
      console.log(response);
    },
    error => {
      console.log(error);
    }    
  );
  }


  newUser(): void{
    this.suser = {
      username: '',
      password: '',
      email: '',
      nomApels: '',
      role: '',
    }
  }


 }



