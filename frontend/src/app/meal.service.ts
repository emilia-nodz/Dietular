import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from './meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  
  private apiUrl = 'http://localhost:8000/app/meal/';

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.apiUrl);
  }

  addMeal(Meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(this.apiUrl, Meal);
  }
}
