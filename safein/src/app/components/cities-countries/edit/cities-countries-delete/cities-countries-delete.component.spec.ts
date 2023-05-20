import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesCountriesDeleteComponent } from './cities-countries-delete.component';

describe('CitiesCountriesDeleteComponent', () => {
  let component: CitiesCountriesDeleteComponent;
  let fixture: ComponentFixture<CitiesCountriesDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesCountriesDeleteComponent]
    });
    fixture = TestBed.createComponent(CitiesCountriesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
