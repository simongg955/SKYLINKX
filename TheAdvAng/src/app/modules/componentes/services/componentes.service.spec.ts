import { TestBed } from '@angular/core/testing';
import { componentesService } from './componentes.service';

describe('ComponentesService', () => {
  let service: componentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(componentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
