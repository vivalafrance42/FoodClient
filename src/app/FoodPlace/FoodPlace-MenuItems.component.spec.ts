import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPlaceMenuItemsComponent } from './FoodPlace-MenuItems.component';


describe('FoodPlaceMenuItemsComponent', () => {
  let component: FoodPlaceMenuItemsComponent;
  let fixture: ComponentFixture<FoodPlaceMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodPlaceMenuItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodPlaceMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});