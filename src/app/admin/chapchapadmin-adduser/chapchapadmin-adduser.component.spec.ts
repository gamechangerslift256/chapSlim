import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapadminAdduserComponent } from './chapchapadmin-adduser.component';

describe('ChapchapadminAdduserComponent', () => {
  let component: ChapchapadminAdduserComponent;
  let fixture: ComponentFixture<ChapchapadminAdduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapadminAdduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapadminAdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
