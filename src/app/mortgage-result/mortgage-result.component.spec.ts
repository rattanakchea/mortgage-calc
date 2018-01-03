import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageResultComponent } from './mortgage-result.component';

describe('MortgageResultComponent', () => {
  let component: MortgageResultComponent;
  let fixture: ComponentFixture<MortgageResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
