import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsViewerColumnBookingsComponent } from './bookings-viewer-column-bookings.component';

describe('BookingsViewerColumnBookingsComponent', () => {
  let component: BookingsViewerColumnBookingsComponent;
  let fixture: ComponentFixture<BookingsViewerColumnBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsViewerColumnBookingsComponent]
    });
    fixture = TestBed.createComponent(BookingsViewerColumnBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
