import { Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'item-list-component', component: ItemListComponent},
];