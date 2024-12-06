import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item.service';
import {  Item } from '../models/item.model'
import { ItemDetailsComponent } from '../item-details/item-details.component';


@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ItemDetailsComponent],
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

@Output() Interest: EventEmitter<number> = new EventEmitter();

checker: number = 0;

  showDetails(x: number) {
    this.checker = x;
    this.Interest.emit(x);
  }

}

