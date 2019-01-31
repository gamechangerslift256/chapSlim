import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapProductsalesgrowthComponent } from './chapchap-productsalesgrowth.component';

describe('ChapchapProductsalesgrowthComponent', () => {
  let component: ChapchapProductsalesgrowthComponent;
  let fixture: ComponentFixture<ChapchapProductsalesgrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapProductsalesgrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapProductsalesgrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
