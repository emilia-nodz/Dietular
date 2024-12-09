import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item.model'
import { AllergenService } from '../services/allergen.service';
import { Allergen } from '../models/allergen.model';
import { positiveNumberValidator } from '../numbers-validator';

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

    this.formModel = new FormGroup({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required, positiveNumberValidator]),
      cal: new FormControl('', [Validators.required,positiveNumberValidator]),
      protein: new FormControl('', [Validators.required,positiveNumberValidator]),
      carbs: new FormControl('', [Validators.required,positiveNumberValidator]),
      fats: new FormControl('', [Validators.required,positiveNumberValidator]),
      allergens: new FormControl([], [Validators.required])
    })
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
  
  submitForm() {
    const formValue = this.formModel.value;

    // Extract form values
    const { name, desc, weight, cal, protein, carbs, fats, allergens } = formValue;

    // Map allergens to IDs if needed by the backend
    const allergenDetails = allergens.map((alle: Allergen) => ({
      id: alle.id, // Use relevant allergen field(s)
      name: alle.name,
    }));

    // Pass values to addItem
    this.addItem(name, desc, weight, cal, carbs, protein, fats, allergenDetails);
    // this.addItem(
    //   this.formModel.value.name,
    //   this.formModel.value.desc,
    //   this.formModel.value.weight,
    //   this.formModel.value.cal,
    //   this.formModel.value.carbs,
    //   this.formModel.value.protein,
    //   this.formModel.value.fats,
    //   this.formModel.value.allergens
    // );
  }
  
}