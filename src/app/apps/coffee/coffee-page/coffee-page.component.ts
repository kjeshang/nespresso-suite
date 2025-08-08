import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { CoffeeRecommendationComponent } from '../coffee-recommendation/coffee-recommendation.component';

@Component({
  selector: 'app-coffee-page',
  imports: [FeatureContainerComponent, CoffeeRecommendationComponent],
  templateUrl: './coffee-page.component.html',
  styleUrl: './coffee-page.component.scss'
})
export class CoffeePageComponent {
  
}
