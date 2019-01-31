import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapchapadminDistributorslistComponent } from './chapchapadmin-distributorslist.component';

describe('ChapchapadminDistributorslistComponent', () => {
  let component: ChapchapadminDistributorslistComponent;
  let fixture: ComponentFixture<ChapchapadminDistributorslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapchapadminDistributorslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapchapadminDistributorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
