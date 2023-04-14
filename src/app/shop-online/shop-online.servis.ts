import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Categories, Category, productsCategories } from "./shop-settings/categories.model";
import { Amount, Layout, Sort } from "./shop-products/products.model";
import { ShopProduct, shopProducts } from "./shop-products/shop-product/product.model";

@Injectable()
export class ShopOnlineService {

    shopProducts : ShopProduct[] = shopProducts;
    productsCategories: Categories[] = productsCategories;

    selectedLayout = new BehaviorSubject<Layout>('grid');
    layoutChanges = this.selectedLayout.asObservable(); 

    selectedSort = new BehaviorSubject<Sort>('name');
    sortChanges = this.selectedSort.asObservable();

    selectedCategory = new BehaviorSubject<Category[]>(this.productsCategories.map(category => category.name));
    categoryChanges = this.selectedCategory.asObservable();

    productsToShow: ShopProduct[] = [];
    productsChanges = new Subject<ShopProduct[]>();

    tableSize = new BehaviorSubject<Amount>(8);
    tableSizeChanges = this.tableSize.asObservable();

    page: number = 1;

    constructor() {}

    selectLayout(layout: Layout) {
        this.selectedLayout.next(layout);
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

    selectSort(sort: Sort) {
        this.selectedSort.next(sort);

        if(sort === 'category') {
            this.productsToShow.sort(function(a: ShopProduct, b: ShopProduct) {
                return a.category.localeCompare(b.category);
            })
        }

        if(sort === 'name') {
            this.productsToShow.sort(function(a: ShopProduct, b: ShopProduct) {
                return a.name.localeCompare(b.name);
            })
        }

        if(sort === 'price') {
            this.productsToShow.sort(function(a: ShopProduct, b: ShopProduct) {
                return a.price - b.price;
            })
        }
    }

    showProducts() {
        this.productsToShow = this.shopProducts.filter(prod => this.selectedCategory.getValue().indexOf(prod.category) >= 0);
        this.productsChanges.next(this.productsToShow);
        this.selectSort(this.selectedSort.getValue());
    }

    showAllProducts() {
        this.selectedCategory.next(this.productsCategories.map(category => category.name));
        this.showProducts();
        this.selectSort(this.selectedSort.getValue());
    }

    tableSizeChange(event: any) {
        this.tableSize.next(event.target.value);
        this.page = 1;
    }
}