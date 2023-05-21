import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateComponent } from './customer-create.component';

describe('CustomerCreateComponent', () => {
  let component: CustomerCreateComponent;
  let fixture: ComponentFixture<CustomerCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCreateComponent]
    });
    fixture = TestBed.createComponent(CustomerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
