import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsVipComponent } from './statistics-vip.component';

describe('StatisticsComponent', () => {
  let component: StatisticsVipComponent;
  let fixture: ComponentFixture<StatisticsVipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsVipComponent]
    });
    fixture = TestBed.createComponent(StatisticsVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
