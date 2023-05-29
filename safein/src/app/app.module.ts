import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLatestBookingsComponent } from './components/home-latest-bookings/home-latest-bookings.component';
import { BookingsViewerColumnComponent } from './components/bookings/bookings-viewer-column/bookings-viewer-column.component';
import { BookingsViewerColumnBookingsComponent } from './components/bookings/bookings-viewer-column-bookings/bookings-viewer-column-bookings.component';
import { BookingsViewerColumnCountriesComponent } from './components/bookings/bookings-viewer-column-countries/bookings-viewer-column-countries.component';
import { BookingsViewerColumnCitiesComponent } from './components/bookings/bookings-viewer-column-cities/bookings-viewer-column-cities.component';
import { BookingsViewerColumnHotelsComponent } from './components/bookings/bookings-viewer-column-hotels/bookings-viewer-column-hotels.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingsViewerColumnRoomsComponent } from './components/bookings/bookings-viewer-column-rooms/bookings-viewer-column-rooms.component';
import { StyleTestComponent } from './components/style-test/style-test.component';
import { TopbarComponent } from './components/navigation/topbar/topbar.component';
import { DatebarComponent } from './components/navigation/topbar/datebar/datebar.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { BookingsCreateColumnComponent } from './components/bookings/edit/bookings-create-column/bookings-create-column.component';
import { BookingCreateComponent } from './components/bookings/edit/booking-create/booking-create.component';
import { BookingEditComponent } from './components/bookings/edit/booking-edit/booking-edit.component';
import { BookingDeleteComponent } from './components/bookings/edit/booking-delete/booking-delete.component';
import { SigninComponent } from './components/user-account/signin/signin.component';
import { AccountComponent } from './pages/account/account.component';
import { WorkingspaceComponent } from './pages/workingspace/workingspace.component';


import { LatestBookingperuserComponent } from './components/bookings/latest-bookingperuser/latest-bookingperuser.component';
import { RoomsHotelsComponent } from './pages/rooms-hotels/rooms-hotels.component';
import { CitiesCountriesComponent } from './pages/cities-countries/cities-countries.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { RoomHotelsCreateComponent } from './components/rooms-hotels/edit/room-hotels-create/room-hotels-create.component';
import { RoomHotelsDeleteComponent } from './components/rooms-hotels/edit/room-hotels-delete/room-hotels-delete.component';
import { RoomHotelsEditComponent } from './components/rooms-hotels/edit/room-hotels-edit/room-hotels-edit.component';
import { RoomHotelsColumncreationComponent } from './components/rooms-hotels/edit/room-hotels-columncreation/room-hotels-columncreation.component';
import { RoomHotelsViewerColumnComponent } from './components/rooms-hotels/room-hotels-viewer-column/room-hotels-viewer-column.component';
import { RoomHotelsTableViewComponent } from './components/rooms-hotels/room-hotels-table-view/room-hotels-table-view.component';
import { RoomHotelsViewerBookingsComponent } from './components/rooms-hotels/room-hotels-viewer-bookings/room-hotels-viewer-bookings.component';
import { RoomHotelsViewerCitiesComponent } from './components/rooms-hotels/room-hotels-viewer-cities/room-hotels-viewer-cities.component';
import { RoomHotelsViewerCountriesComponent } from './components/rooms-hotels/room-hotels-viewer-countries/room-hotels-viewer-countries.component';
import { RoomHotelsViewerHotelsComponent } from './components/rooms-hotels/room-hotels-viewer-hotels/room-hotels-viewer-hotels.component';
import { RoomHotelsViewerRoomsComponent } from './components/rooms-hotels/room-hotels-viewer-rooms/room-hotels-viewer-rooms.component';
import { CitiesCountriesViewerColumnComponent } from './components/cities-countries/cities-countries-viewer-column/cities-countries-viewer-column.component';
import { BookingsViewerColumnDataBookingsComponent } from './components/bookings/bookings-viewer-column-data-bookings/bookings-viewer-column-data-bookings.component';
import { CustomerViewerColumnComponent } from './components/customer/customer-viewer-column/customer-viewer-column.component';
import { CustomerViewerColumnCustomerComponent } from './components/customer/customer-viewer-column-customer/customer-viewer-column-customer.component';
import { CitiesCountriesCreateComponent } from './components/cities-countries/edit/cities-countries-create/cities-countries-create.component';
import { CitiesCountriesEditComponent } from './components/cities-countries/edit/cities-countries-edit/cities-countries-edit.component';
import { CitiesCountriesDeleteComponent } from './components/cities-countries/edit/cities-countries-delete/cities-countries-delete.component';
import { CitiesCountriesCreateColumnComponent } from './components/cities-countries/edit/cities-countries-create-column/cities-countries-create-column.component';
import { CustomerCreateColumnComponent } from './components/customer/edit/customer-create-column/customer-create-column.component';
import { CustomerCreateComponent } from './components/customer/edit/customer-create/customer-create.component';
import { CustomerEditComponent } from './components/customer/edit/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './components/customer/edit/customer-delete/customer-delete.component';
import { UserReadComponent } from './components/user-account/user-read/user-read.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { authInterceptorProvider } from './_helpers/auth.interceptor';
import { UserUpdateComponent } from './components/user-account/user-update/user-update.component';
import { DatePipe } from '@angular/common';
import { AuthImplementationService } from './_services/auth-implementation.service';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLatestBookingsComponent,
    BookingsViewerColumnComponent,
    BookingsViewerColumnBookingsComponent,
    BookingsViewerColumnCountriesComponent,
    BookingsViewerColumnCitiesComponent,
    BookingsViewerColumnHotelsComponent,
    NavbarComponent,
    HomeComponent,
    BookingsViewerColumnRoomsComponent,
    StyleTestComponent,
    TopbarComponent,
    DatebarComponent,
    BookingsComponent,
    BookingsCreateColumnComponent,
    BookingCreateComponent,
    BookingEditComponent,
    BookingDeleteComponent,
    SigninComponent,
    AccountComponent,
    WorkingspaceComponent,
    LatestBookingperuserComponent,
    RoomsHotelsComponent,
    CitiesCountriesComponent,
    CustomersComponent,
    CitiesCountriesViewerColumnComponent,
    BookingsViewerColumnDataBookingsComponent,
    CustomerViewerColumnComponent,
    CustomerViewerColumnCustomerComponent,
    CitiesCountriesCreateComponent,
    CitiesCountriesEditComponent,
    CitiesCountriesDeleteComponent,
    CitiesCountriesCreateColumnComponent,
    CustomerCreateColumnComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
    UserReadComponent,
    UserUpdateComponent,
	RoomHotelsCreateComponent,
	RoomHotelsDeleteComponent,
	RoomHotelsEditComponent,
	RoomHotelsColumncreationComponent,
	RoomHotelsViewerColumnComponent,
	RoomHotelsTableViewComponent,
	RoomHotelsViewerBookingsComponent,
	RoomHotelsViewerCitiesComponent,
	RoomHotelsViewerCountriesComponent,
	RoomHotelsViewerHotelsComponent,
	RoomHotelsViewerRoomsComponent,
  AboutUsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
 providers: [
     authInterceptorProvider,
     DatePipe,
     AuthImplementationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

