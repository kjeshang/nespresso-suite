import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReconciliationTableComponent } from './card-reconciliation-table.component';

describe('ReconciliationTableComponent', () => {
  let component: CardReconciliationTableComponent;
  let fixture: ComponentFixture<CardReconciliationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReconciliationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReconciliationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
