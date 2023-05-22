import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesCountriesCreateComponent } from './cities-countries-create.component';

describe('CitiesCountriesCreateComponent', () => {
  let component: CitiesCountriesCreateComponent;
  let fixture: ComponentFixture<CitiesCountriesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesCountriesCreateComponent]
    });
    fixture = TestBed.createComponent(CitiesCountriesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
