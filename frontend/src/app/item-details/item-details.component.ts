import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  Item } from '../models/item.model'
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {
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

  @Input() index: number | undefined;;
}
