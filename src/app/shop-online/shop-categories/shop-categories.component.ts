import { Component, OnInit } from '@angular/core';
import { Categories } from './categories.model';

@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.component.html',
  styleUrls: ['./shop-categories.component.scss']
})
export class ShopCategoriesComponent implements OnInit {

  productsCategories: Categories[] = [
    {name: 'cookies', icon: 'fa-cookie'},
    {name: 'cakes', icon: 'fa-cloud'},
    {name: 'birthday cakes', icon: 'fa-cake-candles'},
    {name: 'sweets', icon: 'fa-ice-cream'},
    {name: 'balloons', icon: 'fa-golf-ball-tee'},
    {name: 'accessories', icon: 'fa-shapes'},
    {name: 'drinks', icon: 'fa-wine-glass-empty'}]

  selectedCategory: string = 'cakes';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCategory(category: string) {
    this.selectedCategory = category;
  }
}
