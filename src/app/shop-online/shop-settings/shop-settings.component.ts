import { Component, OnInit } from '@angular/core';
import { ShopOnlineService } from '../shop-online.servis';
import { Amount, Layout, Sort } from '../shop-products/products.model';
import { Categories, Category } from './categories.model';

@Component({
  selector: 'app-shop-settings',
  templateUrl: './shop-settings.component.html',
  styleUrls: ['./shop-settings.component.scss']
})
export class ShopSettingsComponent implements OnInit {

  selectedSort: Sort = 'category';
  selectedAmount: Amount = 8;
  selectedLayout: Layout = 'grid';
  tableSize: Amount = 8;
  page: number = 1;
  amountToSelect: Amount[] = [4, 8, 12];

  filtersActive: boolean = false;

  categories: Categories[] = [];
  selectedCategory: Category[] = [];

  categoriesActive : boolean = true;

  constructor(private shopOnlineService : ShopOnlineService) { }

  ngOnInit(): void {
    this.categories = this.shopOnlineService.productsCategories;
    this.shopOnlineService.setCategories();
    this.selectedCategory = this.shopOnlineService.selectedCategory;
    this.shopOnlineService.categoryChanges.subscribe(categories => this.selectedCategory = categories);
    this.onSelectSort(this.selectedSort);
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

  onSelectLayout(layout: Layout) {
    this.shopOnlineService.selectLayout(layout);
  }

  onSelectSort(sort: Sort) {
    this.shopOnlineService.selectSort(sort);
  }

  onTableSizeChange(event: any) {
    this.shopOnlineService.tableSizeChange(event);
    this.tableSize = this.shopOnlineService.tableSize;
    this.page = this.shopOnlineService.page;
  }

  activateFilters() {
    this.filtersActive = !this.filtersActive;
  }
}
