import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewerColumnComponent } from './customer-viewer-column.component';

describe('CustomerViewerColumnComponent', () => {
  let component: CustomerViewerColumnComponent;
  let fixture: ComponentFixture<CustomerViewerColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerViewerColumnComponent]
    });
    fixture = TestBed.createComponent(CustomerViewerColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
