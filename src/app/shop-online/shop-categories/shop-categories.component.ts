import { Component, OnInit } from '@angular/core';
import { ShopOnlineService } from '../shop-online.servis';
import { Categories, Category } from './categories.model';

@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.component.html',
  styleUrls: ['./shop-categories.component.scss']
})
export class ShopCategoriesComponent implements OnInit {

  productsCategories: Categories[] = [];
  selectedCategory: Category[] = [];

  constructor(private shopOnlineService : ShopOnlineService) { }

  ngOnInit(): void {
    this.productsCategories = this.shopOnlineService.productsCategories
  }

  onSelectCategory(category: Category) {
    // this.shopOnlineService.categoryChanges.subscribe(category => {
    //   this.selectedCategory = this.shopOnlineService.selectedCategory
    // })
    this.shopOnlineService.selectCategory(category)
  }
}
