import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashExchangePageComponent } from './cash-exchange-page.component';

describe('CashExchangePageComponent', () => {
  let component: CashExchangePageComponent;
  let fixture: ComponentFixture<CashExchangePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashExchangePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashExchangePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
