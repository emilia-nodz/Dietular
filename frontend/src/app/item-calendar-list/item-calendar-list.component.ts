import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-calendar-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-calendar-list.component.html',
  styleUrl: './item-calendar-list.component.css'
})
export class ItemListComponent {
  items: Item[] = [];
  @Output() interest = new EventEmitter<Item>(); // Emit the entire Item object

  constructor(private itemService: ItemService) {
    this.itemService.getItems().subscribe((data: Item[]) => {
      this.items = data;
    });
  }

  // Emit the selected item
  selectItem(item: Item): void {
    this.interest.emit(item);
  }
}
