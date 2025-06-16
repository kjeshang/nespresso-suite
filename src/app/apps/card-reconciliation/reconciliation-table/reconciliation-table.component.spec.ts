import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationTableComponent } from './reconciliation-table.component';

describe('ReconciliationTableComponent', () => {
  let component: ReconciliationTableComponent;
  let fixture: ComponentFixture<ReconciliationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReconciliationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReconciliationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
