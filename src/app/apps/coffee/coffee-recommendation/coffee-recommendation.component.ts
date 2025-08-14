import { Component, inject } from '@angular/core';
import { CoffeeStore } from '../coffee.store';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CoffeeChartService } from '../coffee.chart.service';
import { PlotlyBarChartComponent } from '../../../shared/page-components/plotly-bar-chart/plotly-bar-chart.component';

@Component({
  selector: 'app-coffee-recommendation',
  imports: [CommonModule, ScrollingModule, MatExpansionModule, MatTabsModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule, PlotlyBarChartComponent],
  templateUrl: './coffee-recommendation.component.html',
  styleUrl: './coffee-recommendation.component.scss'
})
export class CoffeeRecommendationComponent {
  coffeeStore = inject(CoffeeStore);
  coffeeChartService: CoffeeChartService = inject(CoffeeChartService);
}
