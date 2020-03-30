import { TestBed, inject } from '@angular/core/testing';

import { MainWeatherServiceService } from './main-weather-service.service';

describe('MainWeatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainWeatherServiceService]
    });
  });

  it('should be created', inject([MainWeatherServiceService], (service: MainWeatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
