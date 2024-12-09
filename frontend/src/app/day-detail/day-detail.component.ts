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
  saving = false;

  constructor(private dayService: DayService) { }

  itemClick(): void {
    this.showItemDropdown = !this.showItemDropdown;
  }

  addItemToDay(item: Item): void {
    this.tempItems.push(item);
    console.log('Item added to unsaved list', item);
  }

  saveDay(): void {
    if (!this.day) {
      console.warn('No day to save');
      return;
    }

    // Ensure `items` is initialized as an array
    if (!Array.isArray(this.day.items)) {
      this.day.items = [];
    }

    // Map items to IDs for saving
    const updatedDay = {
      ...this.day,
      items: [...this.day.items.map(item => item.id), ...this.tempItems.map(item => item.id)] as any, // Cast to avoid type mismatch
    };

    console.log('Preparing to save day:', updatedDay);

    this.saving = true;
    this.dayService.updateDay(updatedDay).subscribe(
      (updatedDayFromServer) => {
        console.log('Day updated:', updatedDayFromServer);

        // Update item_details after save
        if (this.day) {
          this.day.item_details = [...(this.day.item_details || []), ...this.tempItems];
        }

        this.tempItems = []; // Clear temporary items
        this.saving = false;
        alert('Day saved successfully!');
      },
      (error) => {
        console.error('Error updating day:', error);
        this.saving = false;
        alert('Error saving day. Please check the data format.');
      }
    );
  }



}
