import { TestBed } from '@angular/core/testing';

import { productosService } from './productos.service';

describe('ProductosService', () => {
  let service: productosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(productosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
