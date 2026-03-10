import { Component, inject } from '@angular/core';
import { MachineStore } from '../machine.store';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-machine-list',
  imports: [CommonModule, MatProgressSpinner, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './machine-list.component.html',
  styleUrl: './machine-list.component.scss'
})
export class MachineListComponent {
  machineStore = inject(MachineStore);
}
