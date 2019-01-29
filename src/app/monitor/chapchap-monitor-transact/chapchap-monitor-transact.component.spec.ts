import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapMonitorTransactComponent } from './chapchap-monitor-transact.component';

describe('ChapchapMonitorTransactComponent', () => {
  let component: ChapchapMonitorTransactComponent;
  let fixture: ComponentFixture<ChapchapMonitorTransactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapMonitorTransactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapMonitorTransactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
