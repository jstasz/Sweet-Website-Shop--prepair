import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Categories, Category, productsCategories } from "./shop-categories/categories.model";
import { Layout, Sort } from "./shop-products/products.model";
import { ShopProduct, shopProducts } from "./shop-products/shop-product/product.model";

@Injectable()
export class ShopOnlineService {

    shopProducts : ShopProduct[] = shopProducts;
    productsCategories: Categories[] = productsCategories;

    selectedLayout: Layout = 'grid';
    layoutChanges = new Subject<Layout>();

    selectedCategory: Category[] = [];
    categoryChanges = new Subject<Category[]>();

    selectedSort: Sort = 'name';
    sortChanges = new Subject<Sort>();

    productsToShow: ShopProduct[] = [];
    productsChanges = new Subject<ShopProduct[]>();

    constructor() {}

    selectLayout(layout: Layout) {
        this.selectedLayout = layout;
        this.layoutChanges.next(layout);
    }

    setCategories() {
        this.selectedCategory = this.productsCategories.map(category => category.name);
        this.categoryChanges.next(this.selectedCategory);
    }

    selectCategory(category: Category) {
        if(this.selectedCategory.indexOf(category) < 0) {
            this.selectedCategory.push(category);
        } else {
            this.selectedCategory.splice(this.selectedCategory.indexOf(category), 1);
        }

        this.categoryChanges.next(this.selectedCategory);
        this.productsToShow = this.shopProducts.filter(prod => this.selectedCategory.indexOf(prod.category) >= 0);
        this.productsChanges.next(this.productsToShow);
        this.selectSort(this.selectedSort);
    }

    selectSort(sort: Sort) {
        this.selectedSort = sort;

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

    showAllProducts() {
        this.selectedCategory = this.productsCategories.map(category => category.name);
        this.categoryChanges.next(this.selectedCategory);
        this.productsToShow = this.shopProducts.filter(prod => this.selectedCategory.indexOf(prod.category) >= 0);
        this.productsChanges.next(this.productsToShow);
        this.selectSort(this.selectedSort);
    }
}