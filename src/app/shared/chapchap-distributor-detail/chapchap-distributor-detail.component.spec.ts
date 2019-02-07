import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapDistributorDetailComponent } from './chapchap-distributor-detail.component';

describe('ChapchapDistributorDetailComponent', () => {
  let component: ChapchapDistributorDetailComponent;
  let fixture: ComponentFixture<ChapchapDistributorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapDistributorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapDistributorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
