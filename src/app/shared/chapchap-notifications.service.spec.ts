import { TestBed, inject } from '@angular/core/testing';

import { ChapchapNotificationsService } from './chapchap-notifications.service';

describe('ChapchapNotificationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapchapNotificationsService]
    });
  });

  it('should be created', inject([ChapchapNotificationsService], (service: ChapchapNotificationsService) => {
    expect(service).toBeTruthy();
  }));
});
