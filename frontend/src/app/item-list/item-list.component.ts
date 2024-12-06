import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item.service';
import {  Item } from '../models/item.model'
import { Allergen } from '../models/allergen.model';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items: Item[] = [];
  constructor(private itemService: ItemService) {
    this.itemService.getItems().subscribe((data: Item[]) => {
      console.log(data);  
      this.items = data;
    });
  }

  // getAllergens() {
  //   for(let i = 0; i < this.items.length; i++) {
  //     this.itemAllergens.push(this.items[i].allergens);
  //   }
  // }
    
  checker: boolean = false;

  showDetails() {
    this.checker = !this.checker;
  }

}
