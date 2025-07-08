import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashReconciliationSummaryComponent } from './cash-reconciliation-summary.component';

describe('CashReconciliationSummaryComponent', () => {
  let component: CashReconciliationSummaryComponent;
  let fixture: ComponentFixture<CashReconciliationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashReconciliationSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashReconciliationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
