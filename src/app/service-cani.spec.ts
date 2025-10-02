import { TestBed } from '@angular/core/testing';

import { ServiceCani } from './service-cani';

describe('ServiceCani', () => {
  let service: ServiceCani;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCani);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
