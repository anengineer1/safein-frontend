import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelsViewerRoomsComponent } from './room-hotels-viewer-rooms.component';

describe('RoomHotelsViewerRoomsComponent', () => {
  let component: RoomHotelsViewerRoomsComponent;
  let fixture: ComponentFixture<RoomHotelsViewerRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHotelsViewerRoomsComponent]
    });
    fixture = TestBed.createComponent(RoomHotelsViewerRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
