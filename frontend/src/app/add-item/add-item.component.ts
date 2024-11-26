import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item.model'

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  items: Item[] = [];

  constructor(private itemService: ItemService) {
    this.itemService.getItems().subscribe((data: Item[]) => {
      this.items = data; 
    });
  }

  addItem(name: string, description: string, weight: number, calories: number, carbohydrates: number, proteins: number, fats: number): void {
    const newItem: Item = {name, description, weight, calories, carbohydrates, proteins, fats} as Item;
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
    fats: string
  ): void {
    // Convert string inputs to numbers
    const parsedWeight = parseFloat(weight);
    const parsedCalories = parseFloat(cal);
    const parsedCarbs = parseFloat(carbs);
    const parsedProteins = parseFloat(proteins);
    const parsedFats = parseFloat(fats);
  
    // Call the existing addItem method with the parsed values
    this.addItem(title, content, parsedWeight, parsedCalories, parsedCarbs, parsedProteins, parsedFats);
  }
  
}