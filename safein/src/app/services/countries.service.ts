import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { BASE_API_URL, BASE_API_URL_COUNTRIES_DELETE } from 'src/app/global-config';
import { Country } from '../entityclasses/country';
import { BASE_API_URL_COUNTRIES_GET_ALL } from '../global-config';

@Injectable({
	providedIn: 'root'
})
export class CountriesService {

	baseApiUrl: string = BASE_API_URL + 'countries'; // global bar located in app/config.ts
	headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private httpClient: HttpClient) { }
	/* Get a list all countries*/
	listAllCountries(): Observable<any> {
		return this.httpClient.get(BASE_API_URL_COUNTRIES_GET_ALL).pipe(
			catchError(this.handleError)
		);
	}

	// Get a single item
	getCountryById(id: any): Observable<any> {
		console.log(`${this.baseApiUrl}/id/${id}`);
		return this.httpClient.get(`${this.baseApiUrl}/id/${id}`).pipe(
			catchError(this.handleError)
		);
	}

	/*Get Country by country code */
	getCountryByCountryCode(code: any): Observable<any> {
		console.log(`${this.baseApiUrl}/country/${code}`);
		return this.httpClient.get(`${this.baseApiUrl}/countrycode/${code}`).pipe(
			catchError(this.handleError)
		);
	}

/* Control errors handling */
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

	/*Create a contry*/
	create(code: Country): Observable<any> {
		console.log(`${this.baseApiUrl}`, code);
		return this.httpClient.post(`${this.baseApiUrl}`, code).pipe(
			catchError(this.handleError)
		);
	}

	/* Delete a Country*/
	deleteCountry(code: Country, id: any): Observable<any> {
		let fullUrl: string = BASE_API_URL_COUNTRIES_DELETE + '/' + id;
		console.log(fullUrl, code);
		return this.httpClient.delete(fullUrl).pipe(
			catchError(this.handleError)
		);
	}

	/*Update a Country*/
	update(code: Country, id: any): Observable<any> {
		console.log(`${this.baseApiUrl}/${id}`);
		return this.httpClient
			.put(`${this.baseApiUrl}/${id}`, code)
			.pipe(catchError(this.handleError));
	}

}
