import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CoffeeStore } from '../coffee.store';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-coffee-filter',
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
  templateUrl: './coffee-filter.component.html',
  styleUrl: './coffee-filter.component.scss'
})
export class CoffeeFilterComponent {
  private fb: FormBuilder = inject(FormBuilder);
  coffeeStore = inject(CoffeeStore);

  coffeeFilterForm: FormGroup = this.fb.group({
    query: [''],
  });

  onQueryInput(): void {
    const query: string = this.coffeeFilterForm.get('query')?.value;
    this.coffeeStore.updateQuery(query);
  }
}
