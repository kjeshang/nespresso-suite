import { Component, inject } from '@angular/core';
import { FirstAidStore } from '../first-aid.store';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-first-aid-list',
  imports: [MatProgressSpinner, MatCardModule, MatButtonModule, MatIconModule, MatTabsModule],
  templateUrl: './first-aid-list.component.html',
  styleUrl: './first-aid-list.component.scss'
})
export class FirstAidListComponent {
  firstAidStore = inject(FirstAidStore);
}
