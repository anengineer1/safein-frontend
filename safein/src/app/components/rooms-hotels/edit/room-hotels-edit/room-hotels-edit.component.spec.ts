import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelsEditComponent } from './room-hotels-edit.component';

describe('RoomHotelsEditComponent', () => {
  let component: RoomHotelsEditComponent;
  let fixture: ComponentFixture<RoomHotelsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHotelsEditComponent]
    });
    fixture = TestBed.createComponent(RoomHotelsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
