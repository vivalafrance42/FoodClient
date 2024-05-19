import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FoodPlacesComponent } from './FoodPlace/FoodPlace.component';
import { FoodPlaceMenuItemsComponent } from './FoodPlace/FoodPlace-MenuItems.component';
import { LoginComponent } from './auth/login.component';


export const routes: Routes = [
    {path: '', component: HelloComponent, pathMatch: 'full'},
    {path: 'FoodPlaces', component: FoodPlacesComponent},
    {path: 'FoodPlaceMenuItems/:id', component: FoodPlaceMenuItemsComponent},
    {path: 'login', component: LoginComponent}
];