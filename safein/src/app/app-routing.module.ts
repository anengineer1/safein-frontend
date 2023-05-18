import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsViewerColumnBookingsComponent } from './components/bookings/bookings-viewer-column-bookings/bookings-viewer-column-bookings.component';
import { BookingsViewerColumnCitiesComponent } from './components/bookings/bookings-viewer-column-cities/bookings-viewer-column-cities.component';
import { BookingsViewerColumnCountriesComponent } from './components/bookings/bookings-viewer-column-countries/bookings-viewer-column-countries.component';
import { BookingsViewerColumnHotelsComponent } from './components/bookings/bookings-viewer-column-hotels/bookings-viewer-column-hotels.component';
import { BookingsViewerColumnComponent } from './components/bookings/bookings-viewer-column/bookings-viewer-column.component';
import { HomeLatestBookingsComponent } from './components/home-latest-bookings/home-latest-bookings.component'
import { BookingsViewerColumnRoomsComponent } from './components/bookings/bookings-viewer-column-rooms/bookings-viewer-column-rooms.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingEditComponent } from './components/bookings/edit/booking-edit/booking-edit.component';
import { BookingCreateComponent } from './components/bookings/edit/booking-create/booking-create.component';
import { BookingsCreateColumnComponent } from './components/bookings/edit/bookings-create-column/bookings-create-column.component';
import { BookingDeleteComponent } from './components/bookings/edit/booking-delete/booking-delete.component';

const routes: Routes = [
	{ // Home
		path: "home",
		component: HomeComponent, children: [
			{
				path:"",
				component: HomeLatestBookingsComponent
			}
		]
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
			},
			{
				path: "roomsview",
				component: BookingsViewerColumnRoomsComponent
			},
			{
				path: "bookingedit",
				component: BookingsCreateColumnComponent
			},{
				path: "booking_create",
				component: BookingCreateComponent
			},{
				path:"booking_edit",
				component: BookingEditComponent
			},
			{
				path:"booking_edit",
				component: BookingDeleteComponent
			}

		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
