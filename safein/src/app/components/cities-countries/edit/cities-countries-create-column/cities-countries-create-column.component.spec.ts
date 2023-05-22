import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesCountriesCreateColumnComponent } from './cities-countries-create-column.component';

describe('CitiesCountriesCreateColumnComponent', () => {
  let component: CitiesCountriesCreateColumnComponent;
  let fixture: ComponentFixture<CitiesCountriesCreateColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesCountriesCreateColumnComponent]
    });
    fixture = TestBed.createComponent(CitiesCountriesCreateColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
