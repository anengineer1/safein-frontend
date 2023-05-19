import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsViewerColumnRoomsComponent } from './bookings-viewer-column-rooms.component';

describe('BookingsViewerColumnRoomsComponent', () => {
  let component: BookingsViewerColumnRoomsComponent;
  let fixture: ComponentFixture<BookingsViewerColumnRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsViewerColumnRoomsComponent]
    });
    fixture = TestBed.createComponent(BookingsViewerColumnRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
