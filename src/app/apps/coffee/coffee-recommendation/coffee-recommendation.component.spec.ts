import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeRecommendationComponent } from './coffee-recommendation.component';

describe('CoffeeRecommendationComponent', () => {
  let component: CoffeeRecommendationComponent;
  let fixture: ComponentFixture<CoffeeRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeRecommendationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
