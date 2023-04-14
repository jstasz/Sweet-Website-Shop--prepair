import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopOnlineService } from '../shop-online.servis';
import { Amount, Layout, Sort } from '../shop-products/products.model';
import { Categories, Category } from './categories.model';

@Component({
  selector: 'app-shop-settings',
  templateUrl: './shop-settings.component.html',
  styleUrls: ['./shop-settings.component.scss']
})
export class ShopSettingsComponent implements OnInit {

  selectedSort: Sort = 'name';
  selectedSortSub!: Subscription;

  selectedLayout: Layout = 'grid';
  selectedLayoutSub!: Subscription;

  selectedAmount: Amount = 8;
  selectedAmountSub!: Subscription;

  categories: Categories[] = [];
  selectedCategory: Category[] = [];
  selectedCategoriesSub!: Subscription;

  page: number = 1;
  amountToSelect: Amount[] = [4, 8, 12];

  filtersActive: boolean = false;
  categoriesActive : boolean = true;

  constructor(private shopOnlineService : ShopOnlineService) { }

  ngOnInit(): void {
    this.categories = this.shopOnlineService.productsCategories;
    this.selectedCategoriesSub = this.shopOnlineService.categoryChanges.subscribe(categories => this.selectedCategory = categories);
    this.selectedSortSub = this.shopOnlineService.sortChanges.subscribe(sort => this.selectedSort = sort);
    this.selectedLayoutSub = this.shopOnlineService.layoutChanges.subscribe(layout => this.selectedLayout = layout);
    this.selectedAmountSub = this.shopOnlineService.tableSizeChanges.subscribe(amount => this.selectedAmount = amount);
  }

  activateCategories() {
    this.categoriesActive = !this.categoriesActive;
  }

  onSelectCategory(category: Category) {
    this.shopOnlineService.selectCategory(category);
  }

  onShowAllProducts() {
    this.shopOnlineService.showAllProducts();
  }

  onSelectLayout(layout: Layout) {
    this.shopOnlineService.selectLayout(layout);
  }

  onSelectSort(sort: Sort) {
    this.shopOnlineService.selectSort(sort);
  }

  onTableSizeChange(event: any) {
    this.shopOnlineService.tableSizeChange(event);
    this.shopOnlineService.tableSizeChanges.subscribe(amount => {
      this.selectedAmount = amount;
    });

    this.page = this.shopOnlineService.page;
  }

  activateFilters() {
    this.filtersActive = !this.filtersActive;
  }

  ngOnDestroy() {
    this.selectedSortSub.unsubscribe();
    this.selectedLayoutSub.unsubscribe();
    this.selectedAmountSub.unsubscribe();
    this.selectedCategoriesSub.unsubscribe();
  }
}
