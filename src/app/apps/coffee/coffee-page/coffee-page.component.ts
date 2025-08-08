import { Component, inject } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { CoffeeStore } from '../coffee.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee-page',
  imports: [FeatureContainerComponent, CommonModule],
  templateUrl: './coffee-page.component.html',
  styleUrl: './coffee-page.component.scss'
})
export class CoffeePageComponent {
  coffeeStore = inject(CoffeeStore);
}
