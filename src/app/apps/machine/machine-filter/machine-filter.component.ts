import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MachineStore } from '../machine.store';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-machine-filter',
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule],
  templateUrl: './machine-filter.component.html',
  styleUrl: './machine-filter.component.scss'
})
export class MachineFilterComponent {
  @Input() lastUpdated!: string;

  private fb: FormBuilder = inject(FormBuilder);
  machineStore = inject(MachineStore);
  showFilterOptions: boolean = false;

  machineFilterForm: FormGroup = this.fb.group({
    query: [''],
    selectedTypes: [this.machineStore.uniqueTypes()],
  });

  toggleFilterOptions(): void {
    this.showFilterOptions = !this.showFilterOptions;
  }

  onQueryInput(): void {
    const query: string = this.machineFilterForm.get('query')?.value;
    this.machineStore.updateQuery(query);
  }

  onMachineTypeChange(event: MatCheckboxChange, item: string): void {
    const selectedTypes: Set<string> = new Set<string>(this.machineFilterForm.get('selectedTypes')?.value);
    if(event.checked) {
      selectedTypes.add(item);
    }
    else {
      selectedTypes.delete(item);
    }
    this.machineFilterForm.patchValue({selectedTypes: Array.from(selectedTypes)});
    this.machineStore.updateSelectedTypes(this.machineFilterForm.get('selectedTypes')?.value);
  }
}
