import { Component, OnInit } from '@angular/core';
import { MenuItems } from './MenuItems';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-FoodPlace-MenuItems',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './FoodPlace-MenuItems.component.html',
  styleUrl: './FoodPlace-MenuItems.component.css'
})
export class FoodPlaceMenuItemsComponent{
  public MenuItems: MenuItems[] = [];
  public displayedColumns: string[] = [ "MenuItemId","ItemName","ItemsPurchased","Price",];
  id: number;
  // "FoodPlaceId",
  
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
    this.id = -1;
  }

    ngOnInit(){
      this.getMenuItems();
    }

  getMenuItems() {
    let idparameter = this.activatedRoute.snapshot.paramMap.get("id");
    this.id = idparameter ? + idparameter : 0;

    this.http.get<MenuItems[]>(`${environment.baseUrl}api/FoodPlaces/FoodPlaceMenuItems/${this.id}`).subscribe(
      {
        next: result => this.MenuItems = result,
        error: error => console.log(error)
      }
    );
  }

}