import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelsViewerCountriesComponent } from './room-hotels-viewer-countries.component';

describe('RoomHotelsViewerCountriesComponent', () => {
  let component: RoomHotelsViewerCountriesComponent;
  let fixture: ComponentFixture<RoomHotelsViewerCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHotelsViewerCountriesComponent]
    });
    fixture = TestBed.createComponent(RoomHotelsViewerCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
