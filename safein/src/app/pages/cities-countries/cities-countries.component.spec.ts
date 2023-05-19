import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesCountriesComponent } from './cities-countries.component';

describe('CitiesCountriesComponent', () => {
  let component: CitiesCountriesComponent;
  let fixture: ComponentFixture<CitiesCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesCountriesComponent]
    });
    fixture = TestBed.createComponent(CitiesCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
