import { Injectable } from '@angular/core';
import { KEYS } from '../enviroments/KEYS';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  /*   Sign Out the token in the sessionStorage */
  signOut(): void {
    window.sessionStorage.clear();
  }

  /*    Save the token in the sessionStorage */
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(KEYS.TOKEN_KEY);
    window.sessionStorage.setItem(KEYS.TOKEN_KEY, token);
  }

  /*    Get the token in the sessionStorage */
  public getToken(): string | null {
    return window.sessionStorage.getItem(KEYS.TOKEN_KEY);
  }

  /*  Save the user  in the sessionStorage */
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(KEYS.USER_KEY);
    window.sessionStorage.setItem(KEYS.USER_KEY, JSON.stringify(user));
  }

  /*  Get the user  in the sessionStorage */
  public getUser(user: any): any {
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

}
