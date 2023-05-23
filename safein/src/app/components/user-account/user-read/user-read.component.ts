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

  /* Atributes object user */
 user:any = {};

  constructor(private ts: TokenStorageService, private modalService: SwitchModalService) {

      //Get the user from the sessionStorage  
      this.user = this.ts.getUser();
      console.log(this.user.accessToken);
  }

  ngOnInit(): void {

  }

  /* Close Modal emit false to service --> topbar*/
  closeModal() {
    this.modalService.$modal.emit(false);
  }

}
