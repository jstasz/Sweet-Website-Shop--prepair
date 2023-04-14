import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Categories, Category, shopCategories } from './shop-settings/shop-settings.model';
import { Amount, Layout, Sort } from './shop-settings/shop-settings.model';
import { ShopProduct, shopProducts } from './shop-products/shop-products.model';

@Injectable()
export class ShopOnlineService {

    shopProducts : ShopProduct[] = shopProducts;
    shopCategories: Categories[] = shopCategories;

    selectedLayout = new BehaviorSubject<Layout>('grid');
    layoutChanges = this.selectedLayout.asObservable(); 

    selectedSort = new BehaviorSubject<Sort>('name');
    sortChanges = this.selectedSort.asObservable();

    selectedAmount = new BehaviorSubject<Amount>(8);
    amountChanges = this.selectedAmount.asObservable();

    selectedCategory = new BehaviorSubject<Category[]>(this.shopCategories.map(category => category.name));
    categoryChanges = this.selectedCategory.asObservable();

    productsToShow = new BehaviorSubject<ShopProduct[]>([]);
    productsChanges = this.productsToShow.asObservable();

    page: number = 1;

    constructor() {}

    selectLayout(layout: Layout) {
        this.selectedLayout.next(layout);
    }

    selectSort(sort: Sort) {
        this.selectedSort.next(sort);

        let products = this.productsToShow.getValue();

        if(sort === 'category') {
            products.sort(function(a: ShopProduct, b: ShopProduct) {
                return a.category.localeCompare(b.category);
            })
        }

        if(sort === 'name') {
            products.sort(function(a: ShopProduct, b: ShopProduct) {
                return a.name.localeCompare(b.name);
            })
        }

        if(sort === 'price') {
            products.sort(function(a: ShopProduct, b: ShopProduct) {
                return a.price - b.price;
            })
        }
    }

    selectAmount(event: any) {
        this.selectedAmount.next(event.target.value);
        this.page = 1;
    }

    selectCategory(category: Category) {
        let categories = this.selectedCategory.getValue();

        if(categories.indexOf(category) < 0) {
            categories.push(category);
        } else {
            categories.splice(categories.indexOf(category), 1);
        }

        this.selectedCategory.next(categories);
        this.showProducts();
        this.selectSort(this.selectedSort.getValue());
    }

    showProducts() {
        let products = this.shopProducts.filter(prod => this.selectedCategory.getValue().indexOf(prod.category) >= 0);        
        this.productsToShow.next(products);
        this.selectSort(this.selectedSort.getValue());
    }
}