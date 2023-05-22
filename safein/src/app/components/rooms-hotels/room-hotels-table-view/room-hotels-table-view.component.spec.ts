import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelsTableViewComponent } from './room-hotels-table-view.component';

describe('RoomHotelsTableViewComponent', () => {
  let component: RoomHotelsTableViewComponent;
  let fixture: ComponentFixture<RoomHotelsTableViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHotelsTableViewComponent]
    });
    fixture = TestBed.createComponent(RoomHotelsTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
