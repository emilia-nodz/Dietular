import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item.service';
import {  Item } from '../models/item.model'

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
      this.items = data;
    });
  }


  addItem(name: string, description: string): void {
    const newItem: Item = {name, description} as Item;
    this.itemService.addItem(newItem).subscribe((item) => {
      this.items.push(item);
    })
  }

  checker: boolean = false;

  showDetails() {
    this.checker = !this.checker;
  }

}
