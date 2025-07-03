import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLegacyComponent } from './dashboard-legacy.component';

describe('DashboardLegacyComponent', () => {
  let component: DashboardLegacyComponent;
  let fixture: ComponentFixture<DashboardLegacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLegacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
