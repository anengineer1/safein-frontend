import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsViewerColumnBookingsComponent } from './bookings-viewer-column-bookings/bookings-viewer-column-bookings.component';
import { BookingsViewerColumnCitiesComponent } from './bookings-viewer-column-cities/bookings-viewer-column-cities.component';
import { BookingsViewerColumnCountriesComponent } from './bookings-viewer-column-countries/bookings-viewer-column-countries.component';
import { BookingsViewerColumnHotelsComponent } from './bookings-viewer-column-hotels/bookings-viewer-column-hotels.component';
import { BookingsViewerColumnComponent } from './bookings-viewer-column/bookings-viewer-column.component';
import { HomeLatestBookingsComponent } from './home-latest-bookings/home-latest-bookings.component'

const routes: Routes = [
	{ // Home
		path: "home",
		component: HomeLatestBookingsComponent
	},
	{ // Bookings route
		path: "bookings", component: BookingsViewerColumnComponent, children: [
			{
				path: "bookingsview",
				component: BookingsViewerColumnBookingsComponent
			},
			{
				path: "countriesview",
				component: BookingsViewerColumnCountriesComponent
			},
			{
				path: "citiesview",
				component: BookingsViewerColumnCitiesComponent
			},
			{
				path: "hotelsview",
				component: BookingsViewerColumnHotelsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
