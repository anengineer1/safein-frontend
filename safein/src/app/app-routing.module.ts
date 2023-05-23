import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { SigninComponent } from './components/user-account/signin/signin.component';
import { AccountComponent } from './pages/account/account.component';
import { WorkingspaceComponent } from './pages/workingspace/workingspace.component';
import { RoomsHotelsComponent } from './pages/rooms-hotels/rooms-hotels.component';
import { CitiesCountriesComponent } from './pages/cities-countries/cities-countries.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { StyleTestComponent } from './components/style-test/style-test.component';


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
				path: "rooms-hotels",
				component: RoomsHotelsComponent
			},
			{ // Cities/Countries
				path: "cities-countries",
				component: CitiesCountriesComponent
			},

			{ // Bookings route
				path: "bookings",
				component: BookingsComponent
			},
			{ // Bookings route
				path: "stylesheet",
				component: StyleTestComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
