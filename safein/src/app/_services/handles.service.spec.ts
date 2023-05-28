import { TestBed } from '@angular/core/testing';

import { HandlesService } from './handles.service';

describe('HandlesService', () => {
  let service: HandlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
