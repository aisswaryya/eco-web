import { TestBed } from '@angular/core/testing';

import { DonationServicesService } from './donation-services.service';

describe('DonationServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationServicesService = TestBed.get(DonationServicesService);
    expect(service).toBeTruthy();
  });
});
