import { TestBed } from '@angular/core/testing';

import { VehiclePropertiesService } from './vehicle-properties.service';

describe('VehiclePropertiesService', () => {
  let service: VehiclePropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclePropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
