import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLatestBookingsComponent } from './components/home-latest-bookings/home-latest-bookings.component';
import { BookingsViewerColumnComponent } from './components/bookings-viewer-column/bookings-viewer-column.component';
import { BookingsViewerColumnBookingsComponent } from './components/bookings-viewer-column-bookings/bookings-viewer-column-bookings.component';
import { BookingsViewerColumnCountriesComponent } from './components/bookings-viewer-column-countries/bookings-viewer-column-countries.component';
import { BookingsViewerColumnCitiesComponent } from './components/bookings-viewer-column-cities/bookings-viewer-column-cities.component';
import { BookingsViewerColumnHotelsComponent } from './components/bookings-viewer-column-hotels/bookings-viewer-column-hotels.component';
import { BookingsViewerColumnRoomsComponent } from './components/bookings-viewer-column-rooms/bookings-viewer-column-rooms.component';
import { StyleTestComponent } from './components/style-test/style-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLatestBookingsComponent,
    BookingsViewerColumnComponent,
    BookingsViewerColumnBookingsComponent,
    BookingsViewerColumnCountriesComponent,
    BookingsViewerColumnCitiesComponent,
    BookingsViewerColumnHotelsComponent,
    BookingsViewerColumnRoomsComponent,
    StyleTestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
