import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../enviroments/API';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL.server + 'all', {responseType: 'text'});
  }


  getUserBoard(): Observable<any> {
    return this.http.get(API_URL.server + 'user', {responseType: 'text'});
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL.server + 'mod', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL.server + 'admin', {responseType: 'text'});
  }
}
