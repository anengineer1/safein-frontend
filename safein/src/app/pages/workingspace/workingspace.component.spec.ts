import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingspaceComponent } from './workingspace.component';

describe('WorkingspaceComponent', () => {
  let component: WorkingspaceComponent;
  let fixture: ComponentFixture<WorkingspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingspaceComponent]
    });
    fixture = TestBed.createComponent(WorkingspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
