import { Component, OnInit } from '@angular/core';
import { ShopOnlineService } from '../shop-online.servis';
import { Categories, Category } from './categories.model';

@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.component.html',
  styleUrls: ['./shop-categories.component.scss']
})
export class ShopCategoriesComponent implements OnInit {

  categories: Categories[] = [];
  selectedCategory: Category[] = [];

  categoriesActive : boolean = true;

  constructor(private shopOnlineService : ShopOnlineService) { }

  ngOnInit(): void {
    this.categories = this.shopOnlineService.productsCategories;
    this.shopOnlineService.setCategories();
    this.selectedCategory = this.shopOnlineService.selectedCategory;
    this.shopOnlineService.categoryChanges.subscribe(categories => this.selectedCategory = categories);
  }

  onSelectCategory(category: Category) {
    this.shopOnlineService.selectCategory(category);
  }

  onShowAllProducts() {
    this.shopOnlineService.showAllProducts();
  }

  activateCategories() {
    this.categoriesActive = !this.categoriesActive;
  }
}
