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
  cartMenuIsActive = false;
  cart: Cart = {items: []};
  cartDisactiveTime: any = '';

  navLinks: string[] = ['shop-online', 'cake-designer', 'contact-us'];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartChanges.subscribe(cart => this.cart = cart)
  }

  activeCartMenu() {
    clearTimeout(this.cartDisactiveTime)
    this.cartMenuIsActive = true;
  }

  disactiveCartMenu() {
      this.cartDisactiveTime = setTimeout(() => {
        this.cartMenuIsActive = false
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
    this.cartMenuIsActive = false;
  }
}
