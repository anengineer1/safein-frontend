import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsViewerColumnHotelsComponent } from './bookings-viewer-column-hotels.component';

describe('BookingsViewerColumnHotelsComponent', () => {
  let component: BookingsViewerColumnHotelsComponent;
  let fixture: ComponentFixture<BookingsViewerColumnHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsViewerColumnHotelsComponent]
    });
    fixture = TestBed.createComponent(BookingsViewerColumnHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
