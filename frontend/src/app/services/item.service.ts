import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:8000/app/item/';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  addItem(Item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, Item).pipe(
      catchError(error => {
        console.error('Error adding item:', error);
        return throwError(() => new Error('Error adding item'));
      })
    );
  }

  delete(Id: number): Observable<void> {
    console.log("zaraz extra mocno usuniemy" + Id)
    return this.http.delete<void>(`${this.apiUrl}${Id}/`);
  }
  
  
}
