import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';
import { ShopProduct } from '../shop-online/shop-products/shop-product/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartMenu = false;
  favouritesMenu = false;
  cart: Cart = {items: []};
  cartDisactiveTime: any = '';
  favDisactiveTime: any = '';


  navLinks: string[] = ['shop-online', 'cake-designer', 'contact-us'];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartChanges.subscribe(cart => this.cart = cart)
  }

  activeMenu() {
    clearTimeout(this.cartDisactiveTime)
    this.cartMenu = true;
    this.favouritesMenu = false;
  }

  activeFavMenu() {
    clearTimeout(this.favDisactiveTime)
    this.favouritesMenu = true;
    this.cartMenu = false;
  }

  disactiveMenu() {
      this.cartDisactiveTime = setTimeout(() => {
        this.cartMenu = false
      }, 500)
  }

  disactiveFavMenu() {
    this.favDisactiveTime = setTimeout(() => {
      this.favouritesMenu = false
    }, 500)
}

  onGetTotalCartPrice(items: ShopProduct[]) {
    return this.cartService.getTotalCartPrice(items);
  }

  showCartCounter() {
    return this.cart.items.map(items => items.quantity).reduce((prev, curr) => prev + curr);
  }

  onClearCart() {
    this.cartService.clearCart();
    this.cartMenu = false;
  }
}
