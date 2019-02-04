import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapDistributorAddnewComponent } from './chapchap-distributor-addnew.component';

describe('ChapchapDistributorAddnewComponent', () => {
  let component: ChapchapDistributorAddnewComponent;
  let fixture: ComponentFixture<ChapchapDistributorAddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapDistributorAddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapDistributorAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
