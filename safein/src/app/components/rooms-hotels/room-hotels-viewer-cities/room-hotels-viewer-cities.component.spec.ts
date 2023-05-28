import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelsViewerCitiesComponent } from './room-hotels-viewer-cities.component';

describe('RoomHotelsViewerCitiesComponent', () => {
  let component: RoomHotelsViewerCitiesComponent;
  let fixture: ComponentFixture<RoomHotelsViewerCitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHotelsViewerCitiesComponent]
    });
    fixture = TestBed.createComponent(RoomHotelsViewerCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
