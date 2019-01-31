import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapProductsalespieComponent } from './chapchap-productsalespie.component';

describe('ChapchapProductsalespieComponent', () => {
  let component: ChapchapProductsalespieComponent;
  let fixture: ComponentFixture<ChapchapProductsalespieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapProductsalespieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapProductsalespieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
