import { Injectable } from '@angular/core';
import { BASE_API_URL, BASE_API_URL_ROOMS_DELETE } from '../global-config';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Room } from '../entityclasses/room';

@Injectable({
	providedIn: 'root'
})
export class RoomsService {

	baseApiUrl: string = BASE_API_URL + 'rooms'; // global bar located in app/config.ts
	headers = new HttpHeaders().set('Content-Type', 'application/json');


	constructor(private httpClient: HttpClient) { }

	listAllRooms(): Observable<any> {
		return this.httpClient.get(this.baseApiUrl).pipe(
			catchError(this.handleError)
		);
	}

	getRoomById(id: any): Observable<any> {
		let fullUrl: string = `${this.baseApiUrl}/${id}`;
		console.log(fullUrl);
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError)
		);
	}

	getRoomsByHotelId(hotelId: any): Observable<any> {
		let fullUrl = `${this.baseApiUrl}/hotels/${hotelId}`;
		console.log(fullUrl);
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError)
		);
	}

	getRoomsByNumberOfPeople(numpeople: any): Observable<any> {
		let fullUrl = `${this.baseApiUrl}/numpeople/${numpeople}`;
		console.log(fullUrl);
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError)
		);
	}

	getRoomsByInternetType(intype: any): Observable<any> {
		let fullUrl = `${this.baseApiUrl}/inettype/${intype}`;
		console.log(fullUrl);
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError)
		);
	}

	getRoomsByIsSmoker(isSmoker: any): Observable<any> {
		let fullUrl = `${this.baseApiUrl}/smoke/${isSmoker}`;
		console.log(fullUrl);
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError)
		);
	}

	getRoomsByHasTerrace(hasTerrace: any): Observable<any> {
		let fullUrl = `${this.baseApiUrl}/terrace/${hasTerrace}`;
		console.log(fullUrl);
		return this.httpClient.get(fullUrl).pipe(
			catchError(this.handleError)
		);
	}

	getRoomsByHotelIdAndNumPeople(hotelId: any, numPers: any): Observable<any> {
		let fullUrl = `${this.baseApiUrl}/${hotelId}/numpers/${numPers}`;
		console.log(fullUrl);
		return this.httpClient.get(fullUrl).pipe(
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
	}

	createRoom(data: any): Observable<any> {
		return this.httpClient.post(this.baseApiUrl, data).pipe(catchError(this.handleError));
	}

	updateRoom(id: any, data: Room): Observable<any> {
		let completeUrl: string = `${this.baseApiUrl}/${id}`;
		console.log(completeUrl);
		return this.httpClient.put(completeUrl, data).pipe(
			catchError(this.handleError)
		);
	}

	/* Delete a Room*/
	deleteRoom(code: Room, id: any): Observable<any> {
		let fullUrl: string = BASE_API_URL_ROOMS_DELETE + '/' + id;
		console.log(fullUrl, code);
		return this.httpClient.delete(fullUrl).pipe(
			catchError(this.handleError)
		);
	}
}
