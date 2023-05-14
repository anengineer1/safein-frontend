import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsViewerColumnCountriesComponent } from './bookings-viewer-column-countries.component';

describe('BookingsViewerColumnCountriesComponent', () => {
  let component: BookingsViewerColumnCountriesComponent;
  let fixture: ComponentFixture<BookingsViewerColumnCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsViewerColumnCountriesComponent]
    });
    fixture = TestBed.createComponent(BookingsViewerColumnCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
