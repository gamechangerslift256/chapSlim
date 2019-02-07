import { TestBed, inject } from '@angular/core/testing';

import { ChapchapDialogService } from './chapchap-dialog.service';

describe('ChapchapDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapchapDialogService]
    });
  });

  it('should be created', inject([ChapchapDialogService], (service: ChapchapDialogService) => {
    expect(service).toBeTruthy();
  }));
});
