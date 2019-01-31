
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapSalesTableComponent } from './chapchap-sales-table.component';

describe('ChapchapSalesTableComponent', () => {
  let component: ChapchapSalesTableComponent;
  let fixture: ComponentFixture<ChapchapSalesTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapSalesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapchapSalesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
