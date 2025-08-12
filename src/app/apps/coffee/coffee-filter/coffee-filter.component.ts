import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CoffeeStore } from '../coffee.store';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-coffee-filter',
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule],
  templateUrl: './coffee-filter.component.html',
  styleUrl: './coffee-filter.component.scss'
})
export class CoffeeFilterComponent {
  private fb: FormBuilder = inject(FormBuilder);
  coffeeStore = inject(CoffeeStore);
  showFilterOptions: boolean = false;

  coffeeFilterForm: FormGroup = this.fb.group({
    query: [''],
    selectedStatus: [this.coffeeStore.selectedStatus()],
    selectedTypes: [this.coffeeStore.selectedTypes()],
  });

  toggleFilterOptions(): void {
    this.showFilterOptions = !this.showFilterOptions;
  }

  onQueryInput(): void {
    const query: string = this.coffeeFilterForm.get('query')?.value;
    this.coffeeStore.updateQuery(query);
  }

  onStatusSelectChange(): void {
    const selectedStatus: string[] = this.coffeeFilterForm.get('selectedStatus')?.value;
    this.coffeeStore.updateSelectedStatus(selectedStatus);
  }

  onCoffeeTypeChange(event: MatCheckboxChange, item: string): void {
    const selectedTypes: Set<string> = new Set<string>(this.coffeeFilterForm.get('selectedTypes')?.value);
    if(event.checked){
      selectedTypes.add(item);
    }
    else{
      selectedTypes.delete(item);
    }
    this.coffeeFilterForm.patchValue({selectedTypes: Array.from(selectedTypes)});
    this.coffeeStore.updateSelectedTypes(this.coffeeFilterForm.get('selectedTypes')?.value);
  }
}
