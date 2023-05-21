import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelsViewerBookingsComponent } from './room-hotels-viewer-bookings.component';

describe('RoomHotelsViewerBookingsComponent', () => {
  let component: RoomHotelsViewerBookingsComponent;
  let fixture: ComponentFixture<RoomHotelsViewerBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHotelsViewerBookingsComponent]
    });
    fixture = TestBed.createComponent(RoomHotelsViewerBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
