import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashExchangeSentOutComponent } from './cash-exchange-sent-out.component';

describe('CashExchangeSentOutComponent', () => {
  let component: CashExchangeSentOutComponent;
  let fixture: ComponentFixture<CashExchangeSentOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashExchangeSentOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashExchangeSentOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
