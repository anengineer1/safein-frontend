import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelsDeleteComponent } from './room-hotels-delete.component';

describe('RoomHotelsDeleteComponent', () => {
  let component: RoomHotelsDeleteComponent;
  let fixture: ComponentFixture<RoomHotelsDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHotelsDeleteComponent]
    });
    fixture = TestBed.createComponent(RoomHotelsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
