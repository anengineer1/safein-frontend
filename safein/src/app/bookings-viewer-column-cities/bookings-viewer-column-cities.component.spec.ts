import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsViewerColumnCitiesComponent } from './bookings-viewer-column-cities.component';

describe('BookingsViewerColumnCitiesComponent', () => {
  let component: BookingsViewerColumnCitiesComponent;
  let fixture: ComponentFixture<BookingsViewerColumnCitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsViewerColumnCitiesComponent]
    });
    fixture = TestBed.createComponent(BookingsViewerColumnCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
