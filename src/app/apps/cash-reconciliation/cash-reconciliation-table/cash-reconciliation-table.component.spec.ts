import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashReconciliationTableComponent } from './cash-reconciliation-table.component';

describe('CashReconciliationTableComponent', () => {
  let component: CashReconciliationTableComponent;
  let fixture: ComponentFixture<CashReconciliationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashReconciliationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashReconciliationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
