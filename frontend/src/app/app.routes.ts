import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ItemListComponent } from './item-list/item-list.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'item-list-component', component: ItemListComponent},
];
