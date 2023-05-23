import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  
  //JWT
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  role?: string;

  //Constructor with TokenStorageService as a parameter
  constructor(private tss: TokenStorageService) { }

  /* When load the component check the token and if user is logged assign boards. */
  ngOnInit(): void {
    this.isLoggedIn = !!this.tss.getToken();

    if (this.isLoggedIn) {
      const user = this.tss.getUser();
      this.roles = user.roles;
      this.role = user.role;
     
//TODO: load data info in profile
      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_EDITOR');

      this.username = user.username;
      console.log(user.username);
    }
  }

  logout(): void {
    //Clear the session storage
    this.tss.signOut();
    //Reload the site but how is not signed redirect to account login
    window.location.reload();
  }

}
