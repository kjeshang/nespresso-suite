import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReconciliationSummaryComponent } from './card-reconciliation-summary.component';

describe('CardReconciliationSummaryComponent', () => {
  let component: CardReconciliationSummaryComponent;
  let fixture: ComponentFixture<CardReconciliationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReconciliationSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReconciliationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
