import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day } from '../models/day.model';
import { DayDetailComponent } from '../day-detail/day-detail.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, DayDetailComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  @Output() daySelected = new EventEmitter<Day>();
  currentDate = new Date();
  currentMonth!: number;
  currentYear!: number;
  weeks: (Date | null)[][] = [];
  selectedDay: Day | null = null;

  ngOnInit() {
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  generateCalendar(year: number, month: number): void {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // pierwszy dzień tygodnia: niedziela
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const endDate = new Date(lastDayOfMonth);
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

    const dayArray: Date[] = [];
    const current = new Date(startDate);

    while (current <= endDate) {
      dayArray.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    this.weeks = [];
    for (let i = 0; i < dayArray.length; i += 7) {
      this.weeks.push(dayArray.slice(i, i + 7));
    }
  }

  isToday(day: Date | null): boolean {
    if (!day) return false;
    const today = new Date();
    return day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear();
  }

  isCurrentMonth(day: Date | null): boolean {
    return !!day && day.getMonth() === this.currentMonth;
  }

  isSelectedDay(day: Date | null): boolean {
    if (!day || !this.selectedDay) return false;
    return day.getTime() === this.selectedDay.date.getTime();
  }
  prevMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }
  dayClick(day: Date | null): void {
    if (day) {
      this.selectedDay = {
        id: day.getDate(), // Example ID based on the day
        date: day,
        items: ['Item 1', 'Item 2'], // Replace with real data if available
        meals: ['Breakfast', 'Lunch', 'Dinner'] // Replace with real data
      };
      this.daySelected.emit(this.selectedDay);
    }
  }
}
