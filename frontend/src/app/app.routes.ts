import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MealListComponent } from './meal-list/meal-list.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'item-list-component', component: ItemListComponent},
    { path: 'meal-list-component', component: MealListComponent},
];
