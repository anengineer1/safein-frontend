import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedSidebarComponent } from './expanded-sidebar.component';

describe('ExpandedSidebarComponent', () => {
  let component: ExpandedSidebarComponent;
  let fixture: ComponentFixture<ExpandedSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandedSidebarComponent]
    });
    fixture = TestBed.createComponent(ExpandedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
