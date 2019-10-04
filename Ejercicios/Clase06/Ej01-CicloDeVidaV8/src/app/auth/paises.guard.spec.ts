import { TestBed, async, inject } from '@angular/core/testing';

import { PaisesGuard } from './paises.guard';

describe('PaisesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaisesGuard]
    });
  });

  it('should ...', inject([PaisesGuard], (guard: PaisesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
