import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MealService } from '../services/meal.service';
import {  Meal } from '../models/meal.model'
import { MealDetailsComponent } from '../meal-details/meal-details.component';

@Component({
  selector: 'app-meal-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MealDetailsComponent],
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.css'
})
export class MealListComponent {
  meals: Meal[] = [];

  constructor(private mealService: MealService) {
    this.mealService.getMeals().subscribe((data: Meal[]) => {
      this.meals = data;
    });
  }
  @Output() interest: EventEmitter<number> = new EventEmitter();
  
  checker: number = 0;
  checkerfordelete: number = 0;
  showDetails(x: number) {
    if(this.checker!=x) {
      this.checker = x;
      this.interest.emit(x);
    } else {
      this.checker = -1;
    }
  }

  deleteThing(itemid: number) {
    console.log("Zaraz usuniemy " + itemid)
    this.mealService.delete(itemid)
    .subscribe()
    location.reload();
  }
  
  showConfirmation(itemid: number) {
    this.checkerfordelete = itemid;
  }
  
  undo() {
    this.checkerfordelete = -1;
    console.log("Dobra jednak nie ")
  }

}
