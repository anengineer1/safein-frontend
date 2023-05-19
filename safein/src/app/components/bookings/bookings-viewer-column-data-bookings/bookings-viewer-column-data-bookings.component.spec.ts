import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsViewerColumnDataBookingsComponent } from './bookings-viewer-column-data-bookings.component';

describe('BookingsViewerColumnDataBookingsComponent', () => {
  let component: BookingsViewerColumnDataBookingsComponent;
  let fixture: ComponentFixture<BookingsViewerColumnDataBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsViewerColumnDataBookingsComponent]
    });
    fixture = TestBed.createComponent(BookingsViewerColumnDataBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
