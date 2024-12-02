import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MealService } from '../services/meal.service';
import {  Meal } from '../models/meal.model'

@Component({
  selector: 'app-meal-list',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
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

  checker: boolean = false;

  showDetails() {
    this.checker = !this.checker;
  }
}
