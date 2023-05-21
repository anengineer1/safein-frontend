import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { BASE_API_URL } from 'src/app/global-config';

@Injectable({
	providedIn: 'root'
})
export class CountriesService {

	baseApiUrl: string = BASE_API_URL + 'countries'; // global bar located in app/config.ts
	headers = new HttpHeaders().set('Content-Type', 'application/json');
	constructor(private httpClient: HttpClient) {}

	listAllCountries(): Observable<any> {
		return this.httpClient.get(this.baseApiUrl).pipe(
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

	getCountryByCountryCode(code: any): Observable<any> {
		console.log(`${this.baseApiUrl}/country/${code}`);
		return this.httpClient.get(`${this.baseApiUrl}/countrycode/${code}`).pipe(
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
