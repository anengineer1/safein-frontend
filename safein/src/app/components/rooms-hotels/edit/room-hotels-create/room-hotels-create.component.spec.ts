import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelsCreateComponent } from './room-hotels-create.component';

describe('RoomHotelsCreateComponent', () => {
  let component: RoomHotelsCreateComponent;
  let fixture: ComponentFixture<RoomHotelsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHotelsCreateComponent]
    });
    fixture = TestBed.createComponent(RoomHotelsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
