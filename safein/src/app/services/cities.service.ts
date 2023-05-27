import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL, BASE_API_URL_CITIES_DELETE } from '../global-config';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs';
import { City } from '../entityclasses/city';

@Injectable({
	providedIn: 'root'
})
export class CitiesService {

	baseApiUrl: string = BASE_API_URL + 'cities'; // global bar located in app/config.ts
	headers = new HttpHeaders().set("Content-Type", "application/json");

	constructor(private httpClient: HttpClient) {}

	listAllCites(): Observable<any> {
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
	create(code:City): Observable<any>{
		console.log(`${this.baseApiUrl}`,code);
		return this.httpClient.post(`${this.baseApiUrl}`,code).pipe(
			catchError(this.handleError)
		);
	  }

/* 	  delete(code:City,id:any):Observable<any>{
		console.log(`${this.baseApiUrl}/${id}`,code);
		return this.httpClient.delete(`${this.baseApiUrl}/${id}`).pipe(
			catchError(this.handleError))
	  } */

	  	/* Delete a City*/
	deleteCity(code:City, id:any): Observable<any>{
		let fullUrl : string = BASE_API_URL_CITIES_DELETE+'/'+id;
		console.log(fullUrl, code);
		return this.httpClient.delete(fullUrl).pipe(
			catchError(this.handleError)
		);
	}




	  update(code: City,id:any): Observable<any> {
		console.log(`${this.baseApiUrl}/${id}`,code);
		return this.httpClient
		  .put(`${this.baseApiUrl}/${id}`, code)
		  .pipe(catchError(this.handleError));
	  }

}