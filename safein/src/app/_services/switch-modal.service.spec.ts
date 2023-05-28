import { TestBed } from '@angular/core/testing';

import { SwitchModalService } from './switch-modal.service';

describe('SwitchModalService', () => {
  let service: SwitchModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
