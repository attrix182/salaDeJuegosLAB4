import { TestBed } from '@angular/core/testing';

import { GameTatetiService } from './game-tateti.service';

describe('GameTatetiService', () => {
  let service: GameTatetiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameTatetiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
