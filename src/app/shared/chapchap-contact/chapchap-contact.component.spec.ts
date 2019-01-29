import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapContactComponent } from './chapchap-contact.component';

describe('ChapchapContactComponent', () => {
  let component: ChapchapContactComponent;
  let fixture: ComponentFixture<ChapchapContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
