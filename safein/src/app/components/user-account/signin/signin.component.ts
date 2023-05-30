import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})




export class SigninComponent implements OnInit {


  form: any = {
    username: null,
    password: null
  };

  isLoggedIn: boolean = false;
  isLoggedFailed: boolean = false;
  errorMessage: string = '';
  roles: String[] = [];
  userName: String = '';

  /* Constructor with Auth and TokenStorage services as params */
  constructor(private authService: AuthService, private ts: TokenStorageService, private router: Router) { }

  /* Oninit */
  ngOnInit(): void {

    //if get the token then change state of isLoggegIn and roles
    if (this.ts.getToken()) {
      this.isLoggedIn = true;
      this.userName = this.ts.getUser().username;
      this.roles = this.ts.getUser().roles;
    }
  }

  /* OnSubmit Form */
  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.ts.saveToken(data.accessToken);
        this.ts.saveUser(data);

        console.log("User logged successfully!");
        this.isLoggedFailed = false;
        this.isLoggedIn = true;
        this.roles = this.ts.getUser().roles;
        this.userName = this.ts.getUser().userName;
        
        //If user is logged correctly redirect to the home page, else reload account page
        if (this.isLoggedIn){
          this.router.navigate(['/workingspace/home']);
        }else{
          this.reloadPage();
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoggedFailed = true;
      }
    });

  }

  reloadPage() {
    window.location.reload();
  }

  recoverPassword(){
    alert ("Please contact : \n - Your local administrator to recover your password or \n - Contact with admin@safein.net \n Thank you in advance");
  }

}

