import { TestBed } from '@angular/core/testing';

import { EncuestaService } from './encuesta.service';

describe('EncuestaService', () => {
  let service: EncuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
