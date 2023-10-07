import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentComponent } from './independent.component';

describe('ProbabilityVipComponent', () => {
  let component: IndependentComponent;
  let fixture: ComponentFixture<IndependentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndependentComponent]
    });
    fixture = TestBed.createComponent(IndependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
