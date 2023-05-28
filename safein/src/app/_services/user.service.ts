import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, catchError, throwError } from 'rxjs';
import { API_URL } from '../enviroments/API';

@Injectable({
  providedIn: 'root'
})

/* User Service */
export class UserService {

  constructor(private http: HttpClient) { }

  /*Get an user by id */
  getUserById(id:any): Observable<User> {
    console.log(`${API_URL.server}susers/$id`);
     return this.http.get<User>(`${API_URL.server}susers/$id`).pipe(catchError(this.handleError));
  }

 /* Create an user */
  create(data:any): Observable<any> {
    console.log(`${API_URL.server}register`);
    return this.http.get<User>(`${API_URL.server}register`).pipe(catchError(this.handleError), data);
  }
  
 /* PUT: Save an user */
  update(id:any, data:any): Observable<any> {
  console.log(`${API_URL.server}susers${id}`);
  return this.http.get<User>(`${API_URL.server}susers/$id`).pipe(catchError(this.handleError), data);
}


  /* Controller Error Handler */
  handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		return throwError(
			'Something bad happened; please try again later.');
	};

}
