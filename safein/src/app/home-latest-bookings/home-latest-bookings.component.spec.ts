import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLatestBookingsComponent } from './home-latest-bookings.component';

describe('HomeLatestBookingsComponent', () => {
  let component: HomeLatestBookingsComponent;
  let fixture: ComponentFixture<HomeLatestBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLatestBookingsComponent]
    });
    fixture = TestBed.createComponent(HomeLatestBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
