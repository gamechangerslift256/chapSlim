import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapadminEmplistComponent } from './chapchapadmin-emplist.component';

describe('ChapchapadminEmplistComponent', () => {
  let component: ChapchapadminEmplistComponent;
  let fixture: ComponentFixture<ChapchapadminEmplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapadminEmplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapadminEmplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
