import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ShopProduct } from "../shop-online/shop-products/shop-product/product.model";
import { Cart } from "./cart.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart: Cart = {items: []}
    cartChanges = new Subject<Cart>()

    constructor() {}

    addToCart(item: ShopProduct) {
        this.cart.items.push(item);
        this.cartChanges.next(this.cart);
    }

    removeFromCart(index: number) {
        this.cart.items.splice(index, 1);
        this.cartChanges.next(this.cart);
    }
}