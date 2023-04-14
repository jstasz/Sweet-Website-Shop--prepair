import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Cart } from "../cart/cart.model";
import { ShopProduct } from "../shop-online/shop-products/shop-products.model";


@Injectable()
export class FavouritesService {

    favourites: Cart = {items: []};
    favouritesChange = new Subject<Cart>();

    constructor() {}

    addToFavourites(item: ShopProduct) {
        const productInFav = this.favourites.items.find(prod => prod.id === item.id);

        if(!productInFav) {
            this.favourites.items.push(item);
        } 

        this.favouritesChange.next(this.favourites);
    }

    removeFromFavourites(index: number) {
        this.favourites.items.splice(index, 1);
        this.favouritesChange.next(this.favourites);
    }

    clearFavourites() {
        this.favourites.items.splice(0, this.favourites.items.length);
        this.favouritesChange.next(this.favourites);
    }

    checkFavourites(product: ShopProduct) {
        return this.favourites.items.includes(product);
    }
}