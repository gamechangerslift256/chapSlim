import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapadminMainComponent } from './chapchapadmin-main.component';

describe('ChapchapadminMainComponent', () => {
  let component: ChapchapadminMainComponent;
  let fixture: ComponentFixture<ChapchapadminMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapadminMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapadminMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
