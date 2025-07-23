import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashExchangeBroughtInComponent } from './cash-exchange-brought-in.component';

describe('CashExchangeBroughtInComponent', () => {
  let component: CashExchangeBroughtInComponent;
  let fixture: ComponentFixture<CashExchangeBroughtInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashExchangeBroughtInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashExchangeBroughtInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
