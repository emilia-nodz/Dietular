import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Day} from '../models/day.model';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  private apiUrl = 'http://localhost:8000/app/day/';

  constructor(private http: HttpClient) {}

  getDays(): Observable<Day[]> {
    return this.http.get<Day[]>(this.apiUrl);
  }

  addDay(Day: Day): Observable<Day> {
    return this.http.post<Day>(this.apiUrl, Day);
  }
}
