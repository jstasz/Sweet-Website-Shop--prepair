import { Component, OnInit } from '@angular/core';
import { Categories } from './categories.model';

@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.component.html',
  styleUrls: ['./shop-categories.component.scss']
})
export class ShopCategoriesComponent implements OnInit {

  productsCategories: Categories[] = [
    {name: 'cakes', icon: 'fa-cake-candles'},
    {name: 'sweets', icon: 'fa-ice-cream'},
    {name: 'accessories', icon: 'fa-shapes'}]

  selectedCategory: string = 'cakes';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCategory(category: string) {
    this.selectedCategory = category;
  }
}
