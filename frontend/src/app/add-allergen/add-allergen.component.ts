import { Component } from '@angular/core';
import { Allergen } from '../models/allergen.model';
import { AllergenService } from '../services/allergen.service';

@Component({
  selector: 'app-add-allergen',
  standalone: true,
  imports: [],
  templateUrl: './add-allergen.component.html',
  styleUrl: './add-allergen.component.css'
})
export class AddAllergenComponent {
  allergens: Allergen[] = [];

  constructor(private allergenService: AllergenService) {
    this.allergenService.getAllergens().subscribe((data: Allergen[]) => {
      this.allergens = data; 
    });
  }

  addAllergen(name: string): void {
    const newAllergen: Allergen = {name} as Allergen;
    this.allergenService.addAllergen(newAllergen).subscribe((allergen) => {
      this.allergens.push(allergen);
    }) 
  }

  
}
