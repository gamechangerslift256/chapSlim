
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapRevenueTableComponent } from './chapchap-revenue-table.component';

describe('ChapchapRevenueTableComponent', () => {
  let component: ChapchapRevenueTableComponent;
  let fixture: ComponentFixture<ChapchapRevenueTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapRevenueTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapchapRevenueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
