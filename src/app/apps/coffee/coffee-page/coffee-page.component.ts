import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { CoffeeRecommendationComponent } from '../coffee-recommendation/coffee-recommendation.component';
import { CoffeeFilterComponent } from '../coffee-filter/coffee-filter.component';

@Component({
  selector: 'app-coffee-page',
  imports: [FeatureContainerComponent, CoffeeRecommendationComponent, CoffeeFilterComponent],
  templateUrl: './coffee-page.component.html',
  styleUrl: './coffee-page.component.scss'
})
export class CoffeePageComponent {
  lastUpdated: string = "November 2024";
}
