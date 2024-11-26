import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Allergen} from '../models/allergen.model';

@Injectable({
  providedIn: 'root'
})
export class AllergenService {

  private apiUrl = 'http://localhost:8000/app/allergen/';

  constructor(private http: HttpClient) {}

  getAllergens(): Observable<Allergen[]> {
    return this.http.get<Allergen[]>(this.apiUrl);
  }

  addAllergen(Allergen: Allergen): Observable<Allergen> {
    return this.http.post<Allergen>(this.apiUrl, Allergen);
  }


}

