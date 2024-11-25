import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ItemListComponent } from "./item-list/item-list.component";
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FooterComponent } from "./layout/footer/footer.component";
import { HeaderComponent } from "./layout/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ItemListComponent, CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dietular';

  isLoaded = false;

  constructor() {
    // Simulate initialization delay
    setTimeout(() => {
      this.isLoaded = true;
    }, 100); // Adjust delay as needed
  }
}
