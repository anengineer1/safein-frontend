import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesCountriesViewerColumnComponent } from './cities-countries-viewer-column.component';

describe('CitiesCountriesViewerColumnComponent', () => {
  let component: CitiesCountriesViewerColumnComponent;
  let fixture: ComponentFixture<CitiesCountriesViewerColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesCountriesViewerColumnComponent]
    });
    fixture = TestBed.createComponent(CitiesCountriesViewerColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
