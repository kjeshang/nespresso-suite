import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashReconciliationPageComponent } from './cash-reconciliation-page.component';

describe('CardReconciliationPageComponent', () => {
  let component: CashReconciliationPageComponent;
  let fixture: ComponentFixture<CashReconciliationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashReconciliationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashReconciliationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
