import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Item } from '../models/item.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:8000/app/item/';

  constructor(private http: HttpClient, private router: Router) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl).pipe(
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
