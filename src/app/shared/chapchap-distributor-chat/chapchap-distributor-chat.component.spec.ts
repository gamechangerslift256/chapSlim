import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapDistributorChatComponent } from './chapchap-distributor-chat.component';

describe('ChapchapDistributorChatComponent', () => {
  let component: ChapchapDistributorChatComponent;
  let fixture: ComponentFixture<ChapchapDistributorChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapDistributorChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapDistributorChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
