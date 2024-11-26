import { Component } from '@angular/core';
import { Allergen } from '../models/allergen.model';
import { AllergenService } from '../services/allergen.service';

@Component({
  selector: 'app-allergen-list',
  standalone: true,
  imports: [],
  templateUrl: './allergen-list.component.html',
  styleUrl: './allergen-list.component.css'
})
export class AllergenListComponent {
  allergens: Allergen[] = [];

  constructor(private allergenService: AllergenService) {
    this.allergenService.getAllergens().subscribe((data: Allergen[]) => {
      this.allergens = data; 
    });
  }
}
