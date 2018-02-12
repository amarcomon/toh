import { TestBed, inject } from '@angular/core/testing';

import { HeroesMessageService } from './heroes-message.service';

describe('HeroesMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesMessageService]
    });
  });

  it('should be created', inject([HeroesMessageService], (service: HeroesMessageService) => {
    expect(service).toBeTruthy();
  }));
});
