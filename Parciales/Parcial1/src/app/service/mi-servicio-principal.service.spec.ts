import { TestBed } from '@angular/core/testing';

import { MiServicioPrincipalService } from './mi-servicio-principal.service';

describe('MiServicioPrincipalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiServicioPrincipalService = TestBed.get(MiServicioPrincipalService);
    expect(service).toBeTruthy();
  });
});
