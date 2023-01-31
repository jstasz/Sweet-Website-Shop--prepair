import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { ShopProduct } from "../shop-online/shop-products/shop-product/product.model";
import { Cart } from "./cart.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart: Cart = {items: [{
        imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg',
        name: 'cake',
        price: 150,
        quantity: 2,
        id: 1,
        description: 'desc',
        category: 'cakes'
      },
      {
        imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg',
        name: 'cake jsgd jdgsdgwu jd',
        price: 100,
        quantity: 5,
        id: 1,
        description: 'desc',
        category: 'cakes'
      }]}
    cartChanges = new Subject<Cart>()

    constructor() {}

    addToCart(item: ShopProduct) {
        this.cart.items.push(item)
        this.cartChanges.next(this.cart)
    }
}