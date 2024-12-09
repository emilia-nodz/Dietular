import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, Observable, throwError } from 'rxjs';
import { Item } from '../models/item.model';
import { Router } from '@angular/router';
import { AllergenService } from './allergen.service';
import { Allergen } from '../models/allergen.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:8000/app/item/';

  constructor(private http: HttpClient, private router: Router, private allergenService: AllergenService) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl).pipe(
      mergeMap((items: Item[]) =>
        this.allergenService.getAllergens().pipe(
          map((allergens: Allergen[]) => {
            const allergenMap = new Map<number, Allergen>(
              allergens?.map(allergen => [allergen.id, allergen])
            );

            // Map allergen IDs in items to full allergen details
            return items.map(item => ({
              ...item,
              allergenDetails: item.allergens?.map(id => allergenMap.get(id)!)
            }));
          })
        )
      ),
      catchError(error => {
        console.error('Error getting item:', error);
        return throwError(() => new Error('Error getting item'));
      })
    );
  }

  

  addItem(Item: Item): Observable<Item> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.router.navigate(['/item-list-component']);
    return this.http.post<Item>(this.apiUrl, Item, httpOptions).pipe(
      catchError(error => {
        console.error('Error adding item:', error);
        return throwError(() => new Error('Error adding item'));
      })
    );
  }

  delete(Id: number): Observable<void> {
    console.log("zaraz extra mocno usuniemy" + Id)
    return this.http.delete<void>(`${this.apiUrl}${Id}/`).pipe(
      catchError(error => {
        console.error('Error deleting item:', error);
        return throwError(() => new Error('Error deleting item'));
      })
    );
  }
  
  
}
