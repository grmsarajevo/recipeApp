import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test desc', 'https://c1.staticflickr.com/5/4339/36750430085_b028accce7_b.jpg'),
    new Recipe('Second', 'descccc', 'https://c1.staticflickr.com/5/4339/36750430085_b028accce7_b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
