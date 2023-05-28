import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL, BASE_API_URL_BOOKINGS_CREATE, BASE_API_URL_BOOKINGS_DELETE} from '../global-config';
import { Observable, catchError, throwError } from 'rxjs';
import { BookingData } from '../entityclasses/booking-data';
import { Handles } from '../entityclasses/handles';

@Injectable({
	providedIn: 'root'
})
export class BookingsService {

	baseApiUrl: string = BASE_API_URL + 'booking'; // global bar located in app/config.ts
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

	listAllBookingDatas(): Observable<any> {
		return this.httpClient.get(this.baseApiUrl).pipe(
			catchError(this.handleError)
		);
	}

	getBookingDataById(id: any): Observable<any> {
		let fullUrl: string = `${this.baseApiUrl}/${id}`;
		console.log(fullUrl);
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError)
		);
	}

    getBookingDataByCustomerId(id: any): Observable<any> {
		let fullUrl: string = `${this.baseApiUrl}/customer/${id}`;
		console.log(fullUrl);
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError)
		);
	}

	/* Create a booking*/
	createBooking(code: BookingData): Observable<any>{
		let fullUrl : string = BASE_API_URL_BOOKINGS_CREATE;
		console.log(fullUrl);
		console.log('CODE:'+code);
		return this.httpClient.post(fullUrl, code ).pipe(
			catchError(this.handleError)
		);
	}

	/* Deleting a booking*/
	deleteBooking(code:BookingData, id:any): Observable<any>{
		let fullUrl : string = BASE_API_URL_BOOKINGS_DELETE+'/'+id;
		console.log(fullUrl, code);
		return this.httpClient.delete(fullUrl).pipe(
			catchError(this.handleError)
		);
	}
}
