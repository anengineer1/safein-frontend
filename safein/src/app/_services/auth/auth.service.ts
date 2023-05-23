import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../enviroments/API';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }

  //Signin User
  login(username:string, password:string): Observable<any> {
    return this.http.post(API_URL.signin,{
      username,
      password
    }, httpOptions);
  }

  //SignUp User
  register(username:string, password:string): Observable<any> {
    return this.http.post(API_URL.server + 'signup',{
      username,
      password
    }, httpOptions);
  }

}
