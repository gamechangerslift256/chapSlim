import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapSettingsComponent } from './chapchap-settings.component';

describe('ChapchapSettingsComponent', () => {
  let component: ChapchapSettingsComponent;
  let fixture: ComponentFixture<ChapchapSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
