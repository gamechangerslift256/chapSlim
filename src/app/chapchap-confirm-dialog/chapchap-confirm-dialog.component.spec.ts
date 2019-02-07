import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapConfirmDialogComponent } from './chapchap-confirm-dialog.component';

describe('ChapchapConfirmDialogComponent', () => {
  let component: ChapchapConfirmDialogComponent;
  let fixture: ComponentFixture<ChapchapConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
