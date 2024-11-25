import { Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'item-list-component', component: ItemListComponent},
];