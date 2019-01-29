import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapDistributorChatlistComponent } from './chapchap-distributor-chatlist.component';

describe('ChapchapDistributorChatlistComponent', () => {
  let component: ChapchapDistributorChatlistComponent;
  let fixture: ComponentFixture<ChapchapDistributorChatlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapDistributorChatlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapDistributorChatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
