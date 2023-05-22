import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHotelsColumncreationComponent } from './room-hotels-columncreation.component';

describe('RoomHotelsColumncreationComponent', () => {
  let component: RoomHotelsColumncreationComponent;
  let fixture: ComponentFixture<RoomHotelsColumncreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomHotelsColumncreationComponent]
    });
    fixture = TestBed.createComponent(RoomHotelsColumncreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
