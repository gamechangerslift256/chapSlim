import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapRegisterComponent } from './chapchap-register.component';

describe('ChapchapRegisterComponent', () => {
  let component: ChapchapRegisterComponent;
  let fixture: ComponentFixture<ChapchapRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
