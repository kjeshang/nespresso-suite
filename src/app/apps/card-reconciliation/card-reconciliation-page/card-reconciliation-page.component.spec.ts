import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReconciliationPageComponent } from './card-reconciliation-page.component';

describe('CardReconciliationPageComponent', () => {
  let component: CardReconciliationPageComponent;
  let fixture: ComponentFixture<CardReconciliationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReconciliationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReconciliationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
