import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsCreateColumnComponent } from './bookings-create-column.component';

describe('BookingsCreateColumnComponent', () => {
  let component: BookingsCreateColumnComponent;
  let fixture: ComponentFixture<BookingsCreateColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsCreateColumnComponent]
    });
    fixture = TestBed.createComponent(BookingsCreateColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
