import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapProductsalesComponent } from './chapchap-productsales.component';

describe('ChapchapProductsalesComponent', () => {
  let component: ChapchapProductsalesComponent;
  let fixture: ComponentFixture<ChapchapProductsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapProductsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapProductsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
