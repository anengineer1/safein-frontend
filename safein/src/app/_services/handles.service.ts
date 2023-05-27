import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../global-config';
import { Observable, catchError, throwError } from 'rxjs';
import { Handles } from '../entityclasses/handles';

@Injectable({
	providedIn: 'root'
})
export class HandlesService {

	baseApiUrl: string = BASE_API_URL + 'booking'; // global bar located in app/config.ts
	baseApiHandles: string = BASE_API_URL + 'handle'; // For Put and delete handle endpoints
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
		return throwError(() => new Error('Something bad happened; please try again later.'));
	}

	listAllHandles(): Observable<any> {
		let completeUrl = this.baseApiUrl + '/handles';
		console.log(completeUrl);
		return this.httpClient.get(completeUrl).pipe(
			catchError(this.handleError));
	}

	listLatestsHandles(): Observable<any> {
		let completeUrl = this.baseApiUrl + '/handle/latests';
		console.log(completeUrl);
		return this.httpClient.get(completeUrl).pipe(
			catchError(this.handleError));
	}

	listLatestsHandlesByUserEmail(email: string): Observable<any> {
		let completeUrl = this.baseApiUrl + '/handle/latests/' + `${email}`;
		console.log(completeUrl);
		return this.httpClient.get(completeUrl).pipe(
			catchError(this.handleError));
	}

	getHandleById(id: any): Observable<any> {
		let fullUrl = `${this.baseApiUrl}/handle/${id}`;
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError));
	}

	getHandleByUserId(id: any): Observable<any> {
		let fullUrl = `${this.baseApiUrl}/user/${id}`;
		console.log(fullUrl)
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError));
	}

	getHandleByCustomerId(id: any): Observable<any> {
		let fullUrl = `${this.baseApiUrl}/customer/${id}`;
		console.log(fullUrl)
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError));
	}

	getHandleByRoomId(id: any): Observable<any> {
		let fullUrl = `${this.baseApiUrl}/rooms/${id}`;
		console.log(fullUrl)
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError));
	}

	getHandleByHotelId(id: any): Observable<any> {
		let fullUrl = `${this.baseApiUrl}/hotel/${id}`;
		console.log(fullUrl)
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError));
	}

	updateHandle(id: any, data: Handles): Observable<any> {
		let fullUrl: string = `${this.baseApiHandles}/${id}`;
		console.log(fullUrl);
		return this.httpClient.put(fullUrl, data).pipe(catchError(this.handleError));
	}
}

