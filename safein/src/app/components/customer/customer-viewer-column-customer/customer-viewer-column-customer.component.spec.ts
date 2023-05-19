import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewerColumnCustomerComponent } from './customer-viewer-column-customer.component';

describe('CustomerViewerColumnCustomerComponent', () => {
  let component: CustomerViewerColumnCustomerComponent;
  let fixture: ComponentFixture<CustomerViewerColumnCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerViewerColumnCustomerComponent]
    });
    fixture = TestBed.createComponent(CustomerViewerColumnCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
