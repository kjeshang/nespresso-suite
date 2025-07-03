import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { DashboardLegacyComponent } from '../dashboard-legacy/dashboard-legacy.component';
import { DashboardAppsComponent } from '../dashboard-apps/dashboard-apps.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [FeatureContainerComponent, DashboardLegacyComponent, DashboardAppsComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
