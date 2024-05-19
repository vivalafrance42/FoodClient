import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPlacesComponent } from './FoodPlace.component';

describe('FoodPlacesComponent', () => {
  let component: FoodPlacesComponent;
  let fixture: ComponentFixture<FoodPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodPlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});