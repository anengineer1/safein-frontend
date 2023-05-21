import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/entityclasses/country';
import { CountriesService } from 'src/services/countries.service';

@Component({
	selector: 'app-bookings-viewer-column-countries',
	templateUrl: './bookings-viewer-column-countries.component.html',
	styleUrls: ['./bookings-viewer-column-countries.component.scss']
})
export class BookingsViewerColumnCountriesComponent implements OnInit {

	country: Country | undefined | null = null;
	countryList: Country[] = [];

	constructor(private countriesService: CountriesService) {
	}
	ngOnInit(): void {
		this.getAllCountries();
	}

	getAllCountries(): void {
		this.countriesService.listAllCountries().subscribe(
			(countries: Country[]): void => {
				this.countryList = countries;
			},
			(error: any): void => {
				console.log(error);
			}
		)
	}

	getCountryById(id: string): void {
		if (id) {

			parseInt(id);
			this.countriesService.getCountryById(id).subscribe(
				(countries: Country): void => {
					this.countryList = [countries];
				},
				(error: any): void => {
					console.log(error);
				}
			)
		} else {
			this.getAllCountries();
		}
	}

}
