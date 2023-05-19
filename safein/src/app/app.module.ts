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
import { ExpandedSidebarComponent } from './components/expanded-sidebar/expanded-sidebar.component';
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
    ExpandedSidebarComponent,
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
    RoomHotelsCreateComponent,
    RoomHotelsDeleteComponent,
    RoomHotelsEditComponent,
    RoomHotelsColumncreationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
