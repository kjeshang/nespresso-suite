import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineFilterComponent } from './machine-filter.component';

describe('MachineFilterComponent', () => {
  let component: MachineFilterComponent;
  let fixture: ComponentFixture<MachineFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
