import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelsViewerColumnComponent } from './room-hotels-viewer-column.component';

describe('RoomHotelsViewerColumnComponent', () => {
  let component: RoomHotelsViewerColumnComponent;
  let fixture: ComponentFixture<RoomHotelsViewerColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHotelsViewerColumnComponent]
    });
    fixture = TestBed.createComponent(RoomHotelsViewerColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
