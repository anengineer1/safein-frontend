import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateColumnComponent } from './customer-create-column.component';

describe('CustomerCreateColumnComponent', () => {
  let component: CustomerCreateColumnComponent;
  let fixture: ComponentFixture<CustomerCreateColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCreateColumnComponent]
    });
    fixture = TestBed.createComponent(CustomerCreateColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
