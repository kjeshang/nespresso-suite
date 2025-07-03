import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-apps',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './dashboard-apps.component.html',
  styleUrl: './dashboard-apps.component.scss'
})
export class DashboardAppsComponent {

}
