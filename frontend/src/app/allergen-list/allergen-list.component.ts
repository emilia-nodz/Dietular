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

  checkerfordelete: number = 0;

  Delete(itemid: number) {
    console.log("Zaraz usuniemy " + itemid)
    this.allergenService.delete(itemid)
    .subscribe()
    location.reload();
    }
  
    ShowConfirmation(itemid: number) {
      this.checkerfordelete = itemid;
    }
  
    Undo() {
      this.checkerfordelete = -1;
      console.log("Dobra jednak nie ")
    }
}
