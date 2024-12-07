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

  constructor(private itemService: ItemService, private allergenService: AllergenService) {
    this.allergenService.getAllergens().subscribe((alData: Allergen[]) => {
      this.allergens = alData;
    })
    this.itemService.getItems().subscribe((data: Item[]) => {
      this.items = data; 
    });
  }

  addItem(name: string, description: string, weight: number, calories: number, carbohydrates: number, proteins: number, fats: number, allergens: string[]): void {
    const newItem: Item = {name, description, weight, calories, carbohydrates, proteins, fats, allergens} as Item;
    this.itemService.addItem(newItem).subscribe((item) => {
      this.items.push(item);
    }) 
  }

  onSubmit(
    title: string,
    content: string,
    weight: string,
    cal: string,
    carbs: string,
    proteins: string,
    fats: string,
    allergens: string[]
  ): void {
    const parsedWeight = parseFloat(weight);
    const parsedCalories = parseFloat(cal);
    const parsedCarbs = parseFloat(carbs);
    const parsedProteins = parseFloat(proteins);
    const parsedFats = parseFloat(fats);
  
    this.addItem(title, content, parsedWeight, parsedCalories, parsedCarbs, parsedProteins, parsedFats, allergens);
  }
  
}