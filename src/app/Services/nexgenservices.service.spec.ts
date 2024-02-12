import { TestBed } from '@angular/core/testing';

import { NexgenservicesService } from './nexgenservices.service';

describe('NexgenservicesService', () => {
  let service: NexgenservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NexgenservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
