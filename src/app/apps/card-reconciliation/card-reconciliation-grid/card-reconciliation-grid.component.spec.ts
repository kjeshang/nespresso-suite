import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReconciliationGridComponent } from './card-reconciliation-grid.component';

describe('CardReconciliationGridComponent', () => {
  let component: CardReconciliationGridComponent;
  let fixture: ComponentFixture<CardReconciliationGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReconciliationGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReconciliationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
