import { Component, OnInit } from '@angular/core';
import { SwitchModalService } from 'src/app/_services/switch-modal.service';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.scss']
})

//Class Profile of User
export class UserReadComponent implements OnInit {

  /* Atributes */
  username: String = '';
  email: String = '';
  rol: String = '';
  token: String = '';
  tokenType: String = '';



  constructor(private ts: TokenStorageService, private modalService: SwitchModalService) {


    //if get the token then change state of isLoggegIn and roles
      this.username = this.ts.getUser().username;
      console.log(this.ts.getUser().username);
      this.rol = this.ts.getUser().rol;
      this.email = this.ts.getUser().email;
      this.token = this.ts.getUser().token;
      this.tokenType = this.ts.getUser().tokenType;


  }

  ngOnInit(): void {

  }

  /* Close Modal emit false to service --> topbar*/
  closeModal() {
    this.modalService.$modal.emit(false);
  }

}
