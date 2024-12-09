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

@Output() interest: EventEmitter<number> = new EventEmitter();


checker: number = 0;

  showDetails(x: number) {
    if(this.checker!=x) 
    {
       this.checker = x;
    this.interest.emit(x);
    }
   else 
   {
    this.checker = -1;
   }
  }

  Delete(itemid: number) {
  console.log("Zaraz usuniemy " + itemid)
  }

}

