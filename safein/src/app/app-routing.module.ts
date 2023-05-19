import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsViewerColumnBookingsComponent } from './components/bookings/bookings-viewer-column-bookings/bookings-viewer-column-bookings.component';
import { BookingsViewerColumnCitiesComponent } from './components/bookings/bookings-viewer-column-cities/bookings-viewer-column-cities.component';
import { BookingsViewerColumnCountriesComponent } from './components/bookings/bookings-viewer-column-countries/bookings-viewer-column-countries.component';
import { BookingsViewerColumnHotelsComponent } from './components/bookings/bookings-viewer-column-hotels/bookings-viewer-column-hotels.component';
import { BookingsViewerColumnRoomsComponent } from './components/bookings/bookings-viewer-column-rooms/bookings-viewer-column-rooms.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingEditComponent } from './components/bookings/edit/booking-edit/booking-edit.component';
import { BookingCreateComponent } from './components/bookings/edit/booking-create/booking-create.component';
import { BookingsCreateColumnComponent } from './components/bookings/edit/bookings-create-column/bookings-create-column.component';
import { BookingDeleteComponent } from './components/bookings/edit/booking-delete/booking-delete.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { SigninComponent } from './components/user-account/signin/signin.component';
import { AccountComponent } from './pages/account/account.component';
import { WorkingspaceComponent } from './pages/workingspace/workingspace.component';
import { RoomsHotelsComponent } from './pages/rooms-hotels/rooms-hotels.component';
import { CitiesCountriesComponent } from './pages/cities-countries/cities-countries.component';
import { CustomersComponent } from './pages/customers/customers.component';


const routes: Routes = [
	{ path: '', redirectTo: '/account', pathMatch: 'full' },
	{//User Account: Signin
		path: "signin",
		component: SigninComponent
	}, {
		path: "account",
		component: AccountComponent
	}, {
		path: "workingspace",
		component: WorkingspaceComponent, children: [

			{ // Home
				path: "home",
				component: HomeComponent
			},
			{ // Customers
				path: "customers",
				component: CustomersComponent
			},
			{ // Hotels/Rooms
				path: "rooms",
				component: RoomsHotelsComponent
			},
			{ // Cities/Countries
				path: "cities",
				component: CitiesCountriesComponent
			},

			{ // Bookings route
				path: "bookings",
				component: BookingsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
