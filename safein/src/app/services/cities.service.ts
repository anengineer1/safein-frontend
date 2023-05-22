import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../global-config';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CitiesService {

	baseApiUrl: string = BASE_API_URL + 'cities'; // global bar located in app/config.ts
	headers = new HttpHeaders().set('Content-Type', 'application/json')

	constructor(private httpClient: HttpClient) {}

	listAllCites(): Observable<any> {
		console.log(this.headers);
		return this.httpClient.get(this.baseApiUrl).pipe(
			catchError(this.handleError)
		);
	}

	getCityById(id: String): Observable<any> {
		return this.httpClient.get(`${this.baseApiUrl}/id/${id}`).pipe(
			catchError(this.handleError)
		);
	}

	getCityByName(name: String): Observable<any> {
		console.log(`${this.baseApiUrl}/name/${name}`);
		return this.httpClient.get(`${this.baseApiUrl}/name/${name}`).pipe(
			catchError(this.handleError)
		);
	}

	getCityByCountryCode(countryCode: String): Observable<any> {
		console.log(`${this.baseApiUrl}/country/${countryCode}`);
		return this.httpClient.get(`${this.baseApiUrl}/country/${countryCode}`).pipe(
			catchError(this.handleError)
		);
	}


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
