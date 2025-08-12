import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeFilterComponent } from './coffee-filter.component';

describe('CoffeeFilterComponent', () => {
  let component: CoffeeFilterComponent;
  let fixture: ComponentFixture<CoffeeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
