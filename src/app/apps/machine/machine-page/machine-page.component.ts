import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { MachineListComponent } from '../machine-list/machine-list.component';

@Component({
  selector: 'app-machine-page',
  imports: [FeatureContainerComponent, MachineListComponent],
  templateUrl: './machine-page.component.html',
  styleUrl: './machine-page.component.scss'
})
export class MachinePageComponent {

}
