import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsHotelsComponent } from './rooms-hotels.component';

describe('RoomsHotelsComponent', () => {
  let component: RoomsHotelsComponent;
  let fixture: ComponentFixture<RoomsHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsHotelsComponent]
    });
    fixture = TestBed.createComponent(RoomsHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
