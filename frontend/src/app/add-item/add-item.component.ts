import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item.model'
import { AllergenService } from '../services/allergen.service';
import { Allergen } from '../models/allergen.model';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  items: Item[] = [];
  allergens: Allergen[] = [];

  formModel: FormGroup;

  constructor(private itemService: ItemService, private allergenService: AllergenService) {
    this.allergenService.getAllergens().subscribe((alData: Allergen[]) => {
      this.allergens = alData;
    })
    this.itemService.getItems().subscribe((data: Item[]) => {
      this.items = data; 
    });
  }

  addItem(name: string, description: string, weight: number, calories: number, carbohydrates: number, proteins: number, fats: number, allergen_details: Allergen[]): void {
    const newItem: Item = {name, description, weight, calories, carbohydrates, proteins, fats, allergen_details} as Item;
    this.itemService.addItem(newItem).subscribe((item) => {
      this.items.push(item);
    }) 
  }

  // getSelectedAllergens(selectElement: HTMLSelectElement): string[] {
  //   const selectedOptions = Array.from(selectElement.selectedOptions); // Get selected options
  //   return selectedOptions.map((option) => option.value); // Map to an array of values
  // }
  
  submitForm()
  
}