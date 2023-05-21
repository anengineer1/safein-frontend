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
}
