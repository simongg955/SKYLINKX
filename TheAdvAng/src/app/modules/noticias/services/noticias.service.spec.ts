import { TestBed } from '@angular/core/testing';

import { noticiasService } from './noticias.service';

describe('noticiaservice', () => {
  let service: noticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(noticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
