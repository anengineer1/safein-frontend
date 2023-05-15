import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsViewerColumnComponent } from './bookings-viewer-column.component';

describe('BookingsViewerColumnComponent', () => {
  let component: BookingsViewerColumnComponent;
  let fixture: ComponentFixture<BookingsViewerColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsViewerColumnComponent]
    });
    fixture = TestBed.createComponent(BookingsViewerColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
