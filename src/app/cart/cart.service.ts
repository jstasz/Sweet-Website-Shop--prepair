import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertService } from '../alert/alert.service';
import { ShopProduct } from '../shop-online/shop-products/shop-products.model';
import { Cart } from './cart.model';
import { LocalStorageService } from '../shared/local-storage.service';

import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDSRlmG7zwMfbUU9XMh-aJ9ceNp-3EjwAY",
  authDomain: "sweet-website-contact.firebaseapp.com",
  projectId: "sweet-website-contact",
  storageBucket: "sweet-website-contact.appspot.com",
  messagingSenderId: "1058781079630",
  appId: "1:1058781079630:web:d387b9b5035f0410417b1f",
  measurementId: "G-N6Z7FXHQ81"
};

const app = initializeApp(firebaseConfig);
const orderMessage = getDatabase();

@Injectable()
export class CartService {
    cart: Cart = {items: []};
    cartChanges = new Subject<Cart>();

    constructor(private alertService: AlertService, private localStorageService: LocalStorageService) {}

    getTotalCartPrice(items: ShopProduct[]): number {
        return items.map((item) => item.price * item.quantity).reduce((prev, cur) => prev + cur, 0);
    }

    addToCart(item: ShopProduct) {
        const productInCart = this.cart.items.find(prod => prod.id === item.id);

        if(productInCart) {
            productInCart.quantity += 1;
        } else {
            item.quantity = 1;
            this.cart.items.push(item);
            this.alertService.activateAlert(item);
        }
        this.cartChanges.next(this.cart);
        this.localStorageService.saveLocalData('cart', JSON.stringify(this.cart));
    }

    removeFromCart(item: ShopProduct, index: number) {
        item.quantity = 0;
        this.cart.items.splice(index, 1);
        this.cartChanges.next(this.cart);
        this.localStorageService.saveLocalData('cart', JSON.stringify(this.cart));
    }

    changeQuantity(item: ShopProduct, index: number) {
        const productInCart = this.cart.items.find(prod => prod.id === item.id);

        if(productInCart && productInCart.quantity > 1) {
            productInCart.quantity -= 1;
        } else {
            this.removeFromCart(item, index);
        }

        this.localStorageService.saveLocalData('cart', JSON.stringify(this.cart));
    }

    clearCart() {
        this.cart.items.forEach(item => item.quantity = 0);
        this.cart.items.splice(0, this.cart.items.length);
        this.cartChanges.next(this.cart);
        this.localStorageService.removeLocalData('cart');
    }

    sendOrder(date: string) {
        let order = this.cart.items;
        let randomNumber = Math.floor(Math.random() * 100) + 1;
    
        set(ref(orderMessage, `order ${randomNumber} ${date}`), 
            order
        );
    }

    localCart() {
        const cartFromStorageString = this.localStorageService.getLocalData('cart');
        cartFromStorageString ? this.cart = JSON.parse(cartFromStorageString) : this.cart = {items: []};
    }
}