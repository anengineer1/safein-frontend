import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatebarComponent } from './datebar.component';

describe('DatebarComponent', () => {
  let component: DatebarComponent;
  let fixture: ComponentFixture<DatebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatebarComponent]
    });
    fixture = TestBed.createComponent(DatebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
