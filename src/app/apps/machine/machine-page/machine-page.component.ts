import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { MachineListComponent } from '../machine-list/machine-list.component';
import { MachineFilterComponent } from '../machine-filter/machine-filter.component';

@Component({
  selector: 'app-machine-page',
  imports: [FeatureContainerComponent, MachineListComponent, MachineFilterComponent],
  templateUrl: './machine-page.component.html',
  styleUrl: './machine-page.component.scss'
})
export class MachinePageComponent {
  lastUpdated: string = "November 2024";
}
