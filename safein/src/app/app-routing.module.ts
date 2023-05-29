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
import { UserReadComponent } from './components/user-account/user-read/user-read.component';
import { UserUpdateComponent } from './components/user-account/user-update/user-update.component';
import { StyleTestComponent } from './components/style-test/style-test.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


const routes: Routes = [
	{ path: '', redirectTo: 'account', pathMatch: 'full' },
	{ path: "signin", component: SigninComponent }, //User Account: Signin
	{ path: "account", component: AccountComponent, children:[] },//User Account
	{ path: "user-profile", component: UserReadComponent}, //User Profile read
	{path: "user-profile-update", component: UserUpdateComponent}, //User Profile update
	{
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
			{path: "profile", component: UserReadComponent},//User Profile
			{ // Bookings route
				path: "stylesheet",
				component: StyleTestComponent
			},
			{ // Home
				path: "aboutus",
				component: AboutUsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
