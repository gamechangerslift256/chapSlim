import { TestBed, inject } from '@angular/core/testing';

import { ChapchaprestService } from './chapchaprest.service';

describe('ChapchaprestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapchaprestService]
    });
  });

  it('should be created', inject([ChapchaprestService], (service: ChapchaprestService) => {
    expect(service).toBeTruthy();
  }));
});
