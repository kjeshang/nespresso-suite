import { Component, inject } from '@angular/core';
import { DashboardStore } from '../dashboard.store';

@Component({
  selector: 'app-dashboard-legacy',
  imports: [],
  templateUrl: './dashboard-legacy.component.html',
  styleUrl: './dashboard-legacy.component.scss'
})
export class DashboardLegacyComponent {
  dashboardStore = inject(DashboardStore);
}
