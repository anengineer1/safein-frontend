import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBookingperuserComponent } from './latest-bookingperuser.component';

describe('LatestBookingperuserComponent', () => {
  let component: LatestBookingperuserComponent;
  let fixture: ComponentFixture<LatestBookingperuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestBookingperuserComponent]
    });
    fixture = TestBed.createComponent(LatestBookingperuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
