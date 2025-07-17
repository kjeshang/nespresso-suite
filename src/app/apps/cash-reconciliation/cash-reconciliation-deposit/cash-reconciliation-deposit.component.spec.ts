import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashReconciliationDepositComponent } from './cash-reconciliation-deposit.component';

describe('CashReconciliationDepositComponent', () => {
  let component: CashReconciliationDepositComponent;
  let fixture: ComponentFixture<CashReconciliationDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashReconciliationDepositComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashReconciliationDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
