import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Categories, Category } from "./shop-categories/categories.model";
import { Layout, Sort } from "./shop-products/products.model";
import { ShopProduct } from "./shop-products/shop-product/product.model";

@Injectable()
export class ShopOnlineService {
    selectedLayout: Layout | '' = '';
    layoutChanges = new Subject<Layout>();

    selectedCategory: Category[] = [];
    categoryChanges = new Subject<Category[]>();
    
    shopProducts : ShopProduct[] = [
        {id: 1, name: 'Cake1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://nietylkopasta.pl/wp-content/uploads/2021/10/ciastokukulka-1.jpg', price: 50, category: 'cakes', quantity: 1},
        {id: 2, name: 'Cake1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://nietylkopasta.pl/wp-content/uploads/2021/10/ciastokukulka-1.jpg', price: 50, category: 'cakes', quantity: 1},
        {id: 3, name: 'Cake1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://nietylkopasta.pl/wp-content/uploads/2021/10/ciastokukulka-1.jpg', price: 50, category: 'cakes', quantity: 1},
        {id: 4, name: 'Cake1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://nietylkopasta.pl/wp-content/uploads/2021/10/ciastokukulka-1.jpg', price: 50, category: 'cakes', quantity: 1},
        {id: 5, name: 'Cake1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://nietylkopasta.pl/wp-content/uploads/2021/10/ciastokukulka-1.jpg', price: 50, category: 'cakes', quantity: 1},
        {id: 6, name: 'Cake1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://nietylkopasta.pl/wp-content/uploads/2021/10/ciastokukulka-1.jpg', price: 50, category: 'cakes', quantity: 1},
        {id: 7, name: 'Cake1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://nietylkopasta.pl/wp-content/uploads/2021/10/ciastokukulka-1.jpg', price: 50, category: 'cakes', quantity: 1},
        {id: 8, name: 'Cake2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://ilovebake.pl/wp-content/uploads/2015/04/kruche-ciastka-przepis-7.jpg', price: 10, category: 'cookies', quantity: 1},
        {id: 9, name: 'Cake2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://ilovebake.pl/wp-content/uploads/2015/04/kruche-ciastka-przepis-7.jpg', price: 10, category: 'cookies', quantity: 1},
        {id: 10, name: 'Cake2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://ilovebake.pl/wp-content/uploads/2015/04/kruche-ciastka-przepis-7.jpg', price: 10, category: 'cookies', quantity: 1},
        {id: 11, name: 'Cake2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://ilovebake.pl/wp-content/uploads/2015/04/kruche-ciastka-przepis-7.jpg', price: 10, category: 'cookies', quantity: 1},
        {id: 12, name: 'Cake2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://ilovebake.pl/wp-content/uploads/2015/04/kruche-ciastka-przepis-7.jpg', price: 10, category: 'cookies', quantity: 1},
        {id: 13, name: 'Cake2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://ilovebake.pl/wp-content/uploads/2015/04/kruche-ciastka-przepis-7.jpg', price: 10, category: 'cookies', quantity: 1},
        {id: 14, name: 'Cake2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://ilovebake.pl/wp-content/uploads/2015/04/kruche-ciastka-przepis-7.jpg', price: 10, category: 'cookies', quantity: 1},
        {id: 15, name: 'Cake3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 150, category: 'birthday cakes', quantity: 1},
        {id: 16, name: 'Cake3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 150, category: 'birthday cakes', quantity: 1},
        {id: 17, name: 'Cake3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 150, category: 'birthday cakes', quantity: 1},
        {id: 18, name: 'Cake3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 150, category: 'birthday cakes', quantity: 1},
        {id: 19, name: 'Cake3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 150, category: 'birthday cakes', quantity: 1},
        {id: 20, name: 'Cake3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 150, category: 'birthday cakes', quantity: 1},
        {id: 21, name: 'Cake3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 150, category: 'birthday cakes', quantity: 1},
        {id: 22, name: 'Cake4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://orzechyplus.pl/wp-content/uploads/2021/03/DSC_5888-copy-pl.jpg', price: 150, category: 'sweets', quantity: 1},
        {id: 23, name: 'Cake4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://orzechyplus.pl/wp-content/uploads/2021/03/DSC_5888-copy-pl.jpg', price: 150, category: 'sweets', quantity: 1},
        {id: 24, name: 'Cake4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://orzechyplus.pl/wp-content/uploads/2021/03/DSC_5888-copy-pl.jpg', price: 150, category: 'sweets', quantity: 1},
        {id: 25, name: 'Cake4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://orzechyplus.pl/wp-content/uploads/2021/03/DSC_5888-copy-pl.jpg', price: 150, category: 'sweets', quantity: 1},
        {id: 26, name: 'Cake4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://orzechyplus.pl/wp-content/uploads/2021/03/DSC_5888-copy-pl.jpg', price: 150, category: 'sweets', quantity: 1},
        {id: 27, name: 'Cake4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://orzechyplus.pl/wp-content/uploads/2021/03/DSC_5888-copy-pl.jpg', price: 150, category: 'sweets', quantity: 1},
        {id: 28, name: 'Cake4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://orzechyplus.pl/wp-content/uploads/2021/03/DSC_5888-copy-pl.jpg', price: 150, category: 'sweets', quantity: 1},
        {id: 29, name: 'Cake4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://orzechyplus.pl/wp-content/uploads/2021/03/DSC_5888-copy-pl.jpg', price: 150, category: 'sweets', quantity: 1},
        {id: 30, name: 'Cake5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://a.allegroimg.com/original/03a911/2494069d41f3a2806396dc0022fa/Rose-gold-Balony-na-18-urodziny-slub-party-P36', price: 50, category: 'balloons', quantity: 1},
        {id: 31, name: 'Cake5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://a.allegroimg.com/original/03a911/2494069d41f3a2806396dc0022fa/Rose-gold-Balony-na-18-urodziny-slub-party-P36', price: 50, category: 'balloons', quantity: 1},
        {id: 32, name: 'Cake5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://a.allegroimg.com/original/03a911/2494069d41f3a2806396dc0022fa/Rose-gold-Balony-na-18-urodziny-slub-party-P36', price: 50, category: 'balloons', quantity: 1},
        {id: 33, name: 'Cake5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://a.allegroimg.com/original/03a911/2494069d41f3a2806396dc0022fa/Rose-gold-Balony-na-18-urodziny-slub-party-P36', price: 50, category: 'balloons', quantity: 1},
        {id: 34, name: 'Cake5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://a.allegroimg.com/original/03a911/2494069d41f3a2806396dc0022fa/Rose-gold-Balony-na-18-urodziny-slub-party-P36', price: 50, category: 'balloons', quantity: 1},
        {id: 35, name: 'Cake5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://a.allegroimg.com/original/03a911/2494069d41f3a2806396dc0022fa/Rose-gold-Balony-na-18-urodziny-slub-party-P36', price: 50, category: 'balloons', quantity: 1},
        {id: 36, name: 'Cake5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://a.allegroimg.com/original/03a911/2494069d41f3a2806396dc0022fa/Rose-gold-Balony-na-18-urodziny-slub-party-P36', price: 50, category: 'balloons', quantity: 1},
        {id: 37, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://static5.hurtownia-fajerwerki.pl/pol_pl_Swieczki-urodzinowe-gladkie-zlote-6-cm-6-szt-1034_5.jpg', price: 100, category: 'accessories', quantity: 1},
        {id: 38, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://static5.hurtownia-fajerwerki.pl/pol_pl_Swieczki-urodzinowe-gladkie-zlote-6-cm-6-szt-1034_5.jpg', price: 100, category: 'accessories', quantity: 1},
        {id: 39, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://static5.hurtownia-fajerwerki.pl/pol_pl_Swieczki-urodzinowe-gladkie-zlote-6-cm-6-szt-1034_5.jpg', price: 100, category: 'accessories', quantity: 1},
        {id: 40, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://static5.hurtownia-fajerwerki.pl/pol_pl_Swieczki-urodzinowe-gladkie-zlote-6-cm-6-szt-1034_5.jpg', price: 100, category: 'accessories', quantity: 1},
        {id: 41, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://static5.hurtownia-fajerwerki.pl/pol_pl_Swieczki-urodzinowe-gladkie-zlote-6-cm-6-szt-1034_5.jpg', price: 100, category: 'accessories', quantity: 1},
        {id: 42, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://static5.hurtownia-fajerwerki.pl/pol_pl_Swieczki-urodzinowe-gladkie-zlote-6-cm-6-szt-1034_5.jpg', price: 100, category: 'accessories', quantity: 1},
        {id: 43, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://static5.hurtownia-fajerwerki.pl/pol_pl_Swieczki-urodzinowe-gladkie-zlote-6-cm-6-szt-1034_5.jpg', price: 100, category: 'accessories', quantity: 1},
        {id: 44, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://imbibemagazine.com/wp-content/uploads/2022/08/summer-drinks-neruda-crdt-john-valls.jpg', price: 200, category: 'drinks', quantity: 1},
        {id: 45, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://imbibemagazine.com/wp-content/uploads/2022/08/summer-drinks-neruda-crdt-john-valls.jpg', price: 200, category: 'drinks', quantity: 1},
        {id: 46, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://imbibemagazine.com/wp-content/uploads/2022/08/summer-drinks-neruda-crdt-john-valls.jpg', price: 200, category: 'drinks', quantity: 1},
        {id: 47, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://imbibemagazine.com/wp-content/uploads/2022/08/summer-drinks-neruda-crdt-john-valls.jpg', price: 200, category: 'drinks', quantity: 1},
        {id: 48, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://imbibemagazine.com/wp-content/uploads/2022/08/summer-drinks-neruda-crdt-john-valls.jpg', price: 200, category: 'drinks', quantity: 1},
        {id: 49, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://imbibemagazine.com/wp-content/uploads/2022/08/summer-drinks-neruda-crdt-john-valls.jpg', price: 200, category: 'drinks', quantity: 1},
        {id: 50, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://imbibemagazine.com/wp-content/uploads/2022/08/summer-drinks-neruda-crdt-john-valls.jpg', price: 200, category: 'drinks', quantity: 1},
    ];

    productsCategories: Categories[] = [
        {name: 'cookies', icon: 'fa-cookie'},
        {name: 'cakes', icon: 'fa-cloud'},
        {name: 'birthday cakes', icon: 'fa-cake-candles'},
        {name: 'sweets', icon: 'fa-ice-cream'},
        {name: 'balloons', icon: 'fa-golf-ball-tee'},
        {name: 'accessories', icon: 'fa-shapes'},
        {name: 'drinks', icon: 'fa-wine-glass-empty'}]

    productsToShow: ShopProduct[] = [];
    productsChanges = new Subject<ShopProduct[]>();

    constructor() {}

    changeLayout(layout: Layout) {
        this.selectedLayout = layout
        this.layoutChanges.next(layout)
    }

    setAllCategories() {
        this.selectedCategory = this.productsCategories.map(category => category.name)
        this.categoryChanges.next(this.selectedCategory)
    }

    selectCategory(category: Category) {
        if(this.selectedCategory.indexOf(category) < 0) {
            this.selectedCategory.push(category);
        } else {
            this.selectedCategory.splice(this.selectedCategory.indexOf(category), 1)}

        this.categoryChanges.next(this.selectedCategory);
        this.productsToShow = this.shopProducts.filter(prod => this.selectedCategory.indexOf(prod.category) >= 0)
        this.productsChanges.next(this.productsToShow)
    }

    showAllProducts() {
        this.selectedCategory = this.productsCategories.map(category => category.name)
        this.categoryChanges.next(this.selectedCategory);
        this.productsToShow = this.shopProducts.filter(prod => this.selectedCategory.indexOf(prod.category) >= 0)
        this.productsChanges.next(this.productsToShow)
    }
}