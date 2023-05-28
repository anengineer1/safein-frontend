import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../global-config';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Hotel } from '../entityclasses/hotel';

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

	getHotelByCityId(id: any): Observable<any> {
		console.log(`${this.baseApiUrl}/cities/${id}`);
		return this.httpClient.get(`${this.baseApiUrl}/cities/${id}`).pipe(
			catchError(this.handleError)
		);
	}

	getHotelBySecurityLevel(secLevel: any): Observable<any> {
		console.log(`${this.baseApiUrl}/security_level/${secLevel}`);
		return this.httpClient.get(`${this.baseApiUrl}/security_level/${secLevel}`).pipe(
			catchError(this.handleError)
		);
	}

	getHotelByEnergySuficient(enerSuficiency: any): Observable<any> {
		console.log(`${this.baseApiUrl}/energy_suficient/${enerSuficiency}`);
		return this.httpClient.get(`${this.baseApiUrl}/energy_suficient/${enerSuficiency}`).pipe(
			catchError(this.handleError)
		);
	}
	create(code: Hotel): Observable<any> {
		console.log(`${this.baseApiUrl}`, code);
		return this.httpClient.post(`${this.baseApiUrl}`, code).pipe(
			catchError(this.handleError)
		);
	}}
