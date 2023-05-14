import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLatestBookingsComponent } from './home-latest-bookings/home-latest-bookings.component';
import { BookingsViewerColumnComponent } from './bookings-viewer-column/bookings-viewer-column.component';
import { BookingsViewerColumnBookingsComponent } from './bookings-viewer-column-bookings/bookings-viewer-column-bookings.component';
import { BookingsViewerColumnCountriesComponent } from './bookings-viewer-column-countries/bookings-viewer-column-countries.component';
import { BookingsViewerColumnCitiesComponent } from './bookings-viewer-column-cities/bookings-viewer-column-cities.component';
import { BookingsViewerColumnHotelsComponent } from './bookings-viewer-column-hotels/bookings-viewer-column-hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLatestBookingsComponent,
    BookingsViewerColumnComponent,
    BookingsViewerColumnBookingsComponent,
    BookingsViewerColumnCountriesComponent,
    BookingsViewerColumnCitiesComponent,
    BookingsViewerColumnHotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
