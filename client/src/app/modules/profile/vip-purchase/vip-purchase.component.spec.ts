import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipPurchaseComponent } from './vip-purchase.component';

describe('VipPurchaseComponent', () => {
  let component: VipPurchaseComponent;
  let fixture: ComponentFixture<VipPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VipPurchaseComponent]
    });
    fixture = TestBed.createComponent(VipPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
