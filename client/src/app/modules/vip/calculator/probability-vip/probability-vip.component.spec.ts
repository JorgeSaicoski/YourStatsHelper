import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilityVipComponent } from './probability-vip.component';

describe('ProbabilityVipComponent', () => {
  let component: ProbabilityVipComponent;
  let fixture: ComponentFixture<ProbabilityVipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbabilityVipComponent]
    });
    fixture = TestBed.createComponent(ProbabilityVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
