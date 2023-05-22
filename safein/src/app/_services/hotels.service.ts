import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../global-config';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HotelsService {

	baseApiUrl: string = BASE_API_URL + 'hotels'; // global bar located in app/config.ts
	headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private httpClient: HttpClient) {}

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

	listAllHotels(): Observable<any> {
		return this.httpClient.get(this.baseApiUrl).pipe(
			catchError(this.handleError)
		);
	}

	// Get a single item
	getHotelById(id: any): Observable<any> {
		console.log(`${this.baseApiUrl}/${id}`);
		return this.httpClient.get(`${this.baseApiUrl}/${id}`).pipe(
			catchError(this.handleError)
		);
	}
}
