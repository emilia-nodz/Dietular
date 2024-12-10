import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day } from '../models/day.model';
import { Item } from '../models/item.model';
import { ItemListComponent } from '../item-calendar-list/item-calendar-list.component';
import { DayService } from '../services/day.service';



@Component({
  selector: 'app-day-detail',
  standalone: true,
  imports: [CommonModule, ItemListComponent],
  templateUrl: './day-detail.component.html',
  styleUrl: './day-detail.component.css'
})
export class DayDetailComponent {
  @Input() day: Day | null = null;
  tempItems: Item[] = [];
  showItemDropdown = false;

  constructor(private dayService: DayService) { }

  itemClick(): void {
    this.showItemDropdown = !this.showItemDropdown;
  }

  addItemToDay(item: Item): void {
    if (this.day) {
      if (!this.day.item_details) {
        this.day.item_details = [];
      }

      this.day.item_details.push(item);
      this.tempItems.push(item);
      console.log('Item added to temporary list:', item);
    }
  }


  saveDay(): void {
    if (!this.day) {
      console.warn('No day to save');
      return;
    }

    if (!Array.isArray(this.day.item_details)) {
      this.day.item_details = [];
    }

    // Prepare the day object for saving, mapping item_details to IDs for backend
    const updatedDay = {
      id: this.day.id,
      date: this.day.date,
      items: this.day.item_details.map(item => item.id), // Convert to IDs
      meals: this.day.meals,
    };

    this.dayService.updateDay(updatedDay).subscribe(
      (updatedDayFromServer) => {
        console.log('Day updated:', updatedDayFromServer);

      },
      (error) => {
        console.error('Error updating day:', error);
      }
    );
  }
}
