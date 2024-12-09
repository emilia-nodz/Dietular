import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  formBuilder: any;

  constructor(private itemService: ItemService, private allergenService: AllergenService, private fb: FormBuilder) {
    this.allergenService.getAllergens().subscribe((alData: Allergen[]) => {
      this.allergens = alData;
    })
    this.itemService.getItems().subscribe((data: Item[]) => {
      this.items = data; 
    });

    this.formModel = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      weight: ['', Validators.required],
      cal: ['', Validators.required],
      protein: ['', Validators.required],
      carbs: ['', Validators.required],
      fats: ['', Validators.required],
      allergens: [[],Validators.required],
    });
  }

  addItem(allergen_details: Allergen[], name: string, description: string, weight: number, calories: number, carbohydrates: number, proteins: number, fats: number): void {
    const newItem: Item = {allergen_details, name, description, weight, calories, carbohydrates, proteins, fats } as Item;
    console.log(newItem);
    this.itemService.addItem(newItem).subscribe((item) => {
      console.log(newItem);
      this.items.push(item);
    });
  }

  
  submitForm() {

    const formValue = this.formModel.value;

    // Find full allergen objects based on selected IDs
    const selectedAllergens = formValue.allergens.map((id: number) =>
      this.allergens.find((allergen: Allergen) => allergen.id === id)
    );

      this.addItem(
        selectedAllergens,
        this.formModel.value.name,
        this.formModel.value.desc,
        this.formModel.value.weight,
        this.formModel.value.cal,
        this.formModel.value.carbs,
        this.formModel.value.protein,
        this.formModel.value.fats
        );
    
  }
  
}