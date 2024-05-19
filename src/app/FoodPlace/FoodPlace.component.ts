import { Component, OnInit } from '@angular/core';
import { FoodPlaces } from './FoodPlace';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-FoodPlaces',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './FoodPlace.component.html',
  styleUrl: './FoodPlace.component.scss'
})
export class FoodPlacesComponent{
  public FoodPlaces: FoodPlaces[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getFoodPlaces();
  }

  getFoodPlaces() {
    this.http.get<FoodPlaces[]>(environment.baseUrl+'api/FoodPlaces').subscribe(
      {
       next: result => this.FoodPlaces = result,
      error: error => console.error(error)
      }
  
    );
  }
  title = 'FoodClient';
}



// import { Component } from '@angular/core';
// import { FoodPlaces } from './FoodPlaces';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment.development';
// import { RouterLink } from '@angular/router';
// import { MatTableModule } from '@angular/material/table';

// @Component({
//   selector: 'app-countries',
//   standalone: true,
//   imports: [RouterLink],
//   templateUrl: './FoodPlaces.component.html',
//   styleUrl: './FoodPlaces.component.scss'
// })
// export class CountriesComponent {
//   public countries: FoodPlaces[] = [];


//   constructor(private http: HttpClient) {}
//   ngOnInit(): void {
//     this.getCountries();
//   }

//   getCountries() {
//     this.http.get<FoodPlaces[]>(environment.baseUrl+'api/Countries').subscribe(
//       {
//        next: result => this.countries = result,
//       error: error => console.error(error)
//       }
  
//     );
//   }
//   title = 'weatherclient';
// }