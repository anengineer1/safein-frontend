import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'safein';

  //JWT
  private roles: string[] = [];
  isLoggedIn = true;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  //Constructor with TokenStorageService as a parameter
  constructor(private tss: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tss.getToken();

    if (this.isLoggedIn) {
      const user = this.tss.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tss.signOut();
    window.location.reload();    
  }
}
