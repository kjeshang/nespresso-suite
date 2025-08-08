import { Component, inject } from '@angular/core';
import { CoffeeStore } from '../coffee.store';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-coffee-recommendation',
  imports: [CommonModule, ScrollingModule, MatExpansionModule, MatTabsModule],
  templateUrl: './coffee-recommendation.component.html',
  styleUrl: './coffee-recommendation.component.scss'
})
export class CoffeeRecommendationComponent {
  coffeeStore = inject(CoffeeStore);
  
}
