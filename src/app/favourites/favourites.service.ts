import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Cart } from "../cart/cart.model";
import { ShopProduct } from "../shop-online/shop-products/shop-product/product.model";


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

        console.log(item)
    }

    removeFromFavourites(index: number) {
        this.favourites.items.splice(index, 1);
        this.favouritesChange.next(this.favourites);
    }

}