import { Component, inject, OnInit } from '@angular/core';
import { FirstAidStore } from '../first-aid.store';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-first-aid-list',
  imports: [MatProgressSpinner, MatCardModule, MatButtonModule, MatIconModule, MatTabsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './first-aid-list.component.html',
  styleUrl: './first-aid-list.component.scss'
})
export class FirstAidListComponent {
  firstAidStore = inject(FirstAidStore);

  selectedTypesFormControl: FormControl = new FormControl(this.firstAidStore.selectedTypes());

  onItemTypeSelectChange(): void {
    const selectedTypes: string[] = this.selectedTypesFormControl.value;
    this.firstAidStore.updateSelectedTypes(selectedTypes);
  }
}
