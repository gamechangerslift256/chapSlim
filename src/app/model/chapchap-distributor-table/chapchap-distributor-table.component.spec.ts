
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapDistributorTableComponent } from './chapchap-distributor-table.component';

describe('ChapchapDistributorTableComponent', () => {
  let component: ChapchapDistributorTableComponent;
  let fixture: ComponentFixture<ChapchapDistributorTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapDistributorTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapchapDistributorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
