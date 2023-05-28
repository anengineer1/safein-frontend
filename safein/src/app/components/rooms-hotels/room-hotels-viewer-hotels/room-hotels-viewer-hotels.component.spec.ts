import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelsViewerHotelsComponent } from './room-hotels-viewer-hotels.component';

describe('RoomHotelsViewerHotelsComponent', () => {
  let component: RoomHotelsViewerHotelsComponent;
  let fixture: ComponentFixture<RoomHotelsViewerHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHotelsViewerHotelsComponent]
    });
    fixture = TestBed.createComponent(RoomHotelsViewerHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
