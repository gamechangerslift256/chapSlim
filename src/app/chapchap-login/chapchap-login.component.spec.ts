import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapLoginComponent } from './chapchap-login.component';

describe('ChapchapLoginComponent', () => {
  let component: ChapchapLoginComponent;
  let fixture: ComponentFixture<ChapchapLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
