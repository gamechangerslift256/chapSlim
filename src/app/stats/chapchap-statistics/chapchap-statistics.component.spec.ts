import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapStatisticsComponent } from './chapchap-statistics.component';

describe('ChapchapStatisticsComponent', () => {
  let component: ChapchapStatisticsComponent;
  let fixture: ComponentFixture<ChapchapStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
