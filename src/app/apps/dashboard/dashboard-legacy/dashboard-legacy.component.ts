import { Component, inject } from '@angular/core';
import { DashboardStore } from '../dashboard.store';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-dashboard-legacy',
  imports: [MatExpansionModule],
  templateUrl: './dashboard-legacy.component.html',
  styleUrl: './dashboard-legacy.component.scss'
})
export class DashboardLegacyComponent {
  dashboardStore = inject(DashboardStore);
}
