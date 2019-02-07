import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapMessagesComponent } from './chapchap-messages.component';

describe('ChapchapMessagesComponent', () => {
  let component: ChapchapMessagesComponent;
  let fixture: ComponentFixture<ChapchapMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
