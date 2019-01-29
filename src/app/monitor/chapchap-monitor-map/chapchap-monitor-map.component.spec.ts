import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapMonitorMapComponent } from './chapchap-monitor-map.component';

describe('ChapchapMonitorMapComponent', () => {
  let component: ChapchapMonitorMapComponent;
  let fixture: ComponentFixture<ChapchapMonitorMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapMonitorMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapMonitorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
