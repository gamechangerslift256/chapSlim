import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapMonitorPanelComponent } from './chapchap-monitor-panel.component';

describe('ChapchapMonitorPanelComponent', () => {
  let component: ChapchapMonitorPanelComponent;
  let fixture: ComponentFixture<ChapchapMonitorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapMonitorPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapMonitorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
