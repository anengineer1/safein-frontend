import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesCountriesEditComponent } from './cities-countries-edit.component';

describe('CitiesCountriesEditComponent', () => {
  let component: CitiesCountriesEditComponent;
  let fixture: ComponentFixture<CitiesCountriesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesCountriesEditComponent]
    });
    fixture = TestBed.createComponent(CitiesCountriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
