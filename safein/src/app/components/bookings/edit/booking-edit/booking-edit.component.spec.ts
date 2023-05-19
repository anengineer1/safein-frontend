import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingEditComponent } from './booking-edit.component';

describe('BookingEditComponent', () => {
  let component: BookingEditComponent;
  let fixture: ComponentFixture<BookingEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingEditComponent]
    });
    fixture = TestBed.createComponent(BookingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
