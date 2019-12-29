import { TestBed } from '@angular/core/testing';

import { FundraiserServicesService } from './fundraiser-services.service';

describe('FundraiserServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FundraiserServicesService = TestBed.get(FundraiserServicesService);
    expect(service).toBeTruthy();
  });
});
