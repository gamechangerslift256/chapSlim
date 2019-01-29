import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapHelpComponent } from './chapchap-help.component';

describe('ChapchapHelpComponent', () => {
  let component: ChapchapHelpComponent;
  let fixture: ComponentFixture<ChapchapHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
