import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/entityclasses/city';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
	selector: 'app-bookings-viewer-column-cities',
	templateUrl: './bookings-viewer-column-cities.component.html',
	styleUrls: ['./bookings-viewer-column-cities.component.scss']
})
export class BookingsViewerColumnCitiesComponent implements OnInit {
	city: City | undefined | null = null;
	cityList: City[] = [];

	constructor(private citiesService: CitiesService) {
	}
	ngOnInit(): void {
		this.getAllCities();
	}

	getAllCities(): void {
		this.citiesService.listAllCites().subscribe(
			(countries: City[]): void => {
				this.cityList = countries;
			},
			(error: any): void => {
				console.log(error);
			}
		)
	}

	getCityById(id: string) {
		if (id) {

			parseInt(id);
			this.citiesService.getCityById(id).subscribe(
				(city: City): void => {
					this.cityList = [city];
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllCities();
		}
	}

	getCityByName(name: string) {
		if (name) {

			parseInt(name);
			this.citiesService.getCityByName(name).subscribe(
				(city: City[]): void => {
					console.log(city);
					this.cityList = city;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllCities();
		}
	}

    	getCityByCountryCode(countryCode: string) {
		if (countryCode) {

			parseInt(countryCode);
			this.citiesService.getCityByCountryCode(countryCode).subscribe(
				(city: City[]): void => {
					console.log(city);
					this.cityList = city;
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllCities();
		}
	}
}
