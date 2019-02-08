import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapDistributorListComponent } from './chapchap-distributor-list.component';

describe('ChapchapDistributorListComponent', () => {
  let component: ChapchapDistributorListComponent;
  let fixture: ComponentFixture<ChapchapDistributorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapDistributorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapDistributorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
