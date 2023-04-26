import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopOnlineService } from '../shop-online.servis';
import { Amount, Layout, Sort } from '../shop-settings/shop-settings.model'
import { Categories, Category } from './shop-settings.model';

@Component({
  selector: 'app-shop-settings',
  templateUrl: './shop-settings.component.html',
  styleUrls: ['./shop-settings.component.scss']
})
export class ShopSettingsComponent implements OnInit {
  windowWidth: number = window.innerWidth;

  shopCategories: Categories[] = [];
  sortToSelect: Sort[] = ['category', 'name', 'price'];
  amountToSelect: Amount[] = [4, 8, 12];

  selectedLayout: Layout = 'grid';
  selectedLayoutSub!: Subscription;

  selectedSort: Sort = 'name';
  selectedSortSub!: Subscription;

  selectedAmount: Amount = 8;
  selectedAmountSub!: Subscription;

  selectedCategory: Category[] = [];
  selectedCategoriesSub!: Subscription;

  filtersActive: boolean = false;
  categoriesActive : boolean = false;

  page: number = 1;

  constructor(private shopOnlineService : ShopOnlineService) { }

  ngOnInit(): void {
    this.startingSettings();
    this.shopCategories = this.shopOnlineService.shopCategories;
    this.selectedLayoutSub = this.shopOnlineService.layoutChanges.subscribe(layout => this.selectedLayout = layout);
    this.selectedSortSub = this.shopOnlineService.sortChanges.subscribe(sort => this.selectedSort = sort);
    this.selectedAmountSub = this.shopOnlineService.amountChanges.subscribe(amount => this.selectedAmount = amount);
    this.selectedCategoriesSub = this.shopOnlineService.categoryChanges.subscribe(categories => this.selectedCategory = categories);
  }

  startingSettings() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth >= 768) {
      this.filtersActive = true; 
      this.categoriesActive = true;
    }
  }

  onSelectLayout(layout: Layout) {
    this.shopOnlineService.selectLayout(layout);
  }

  onSelectSort(sort: Sort) {
    this.shopOnlineService.selectSort(sort);
  }

  onSelectAmount(event: any) {
    this.shopOnlineService.selectAmount(event);
    this.shopOnlineService.amountChanges.subscribe(amount => {
      this.selectedAmount = amount;
    });
    this.page = this.shopOnlineService.page;
  }

  onSelectCategory(category: Category) {
    this.shopOnlineService.selectCategory(category);
  }

  onShowAllProducts() {
    this.shopOnlineService.selectedCategory.next(this.shopCategories.map(category => category.name));
    this.shopOnlineService.showProducts();
  }

  ngOnDestroy() {
    this.selectedLayoutSub.unsubscribe();
    this.selectedSortSub.unsubscribe();
    this.selectedAmountSub.unsubscribe();
    this.selectedCategoriesSub.unsubscribe();
  }
}
