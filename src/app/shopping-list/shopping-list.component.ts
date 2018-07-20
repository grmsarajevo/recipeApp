import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  tempVal;

  
  onIngredientAdded(vallTo: Ingredient) {
    console.log(this.ingredients);
    this.ingredients.push(vallTo);
    console.log(this.ingredients);
  }
  

  constructor() { }

  ngOnInit() {
  }

}
