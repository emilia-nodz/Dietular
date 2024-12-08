import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day } from '../models/day.model';


@Component({
  selector: 'app-day-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-detail.component.html',
  styleUrl: './day-detail.component.css'
})
export class DayDetailComponent {
  @Input() day: Day | null = null;
}
