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

  navLinks: string[] = ['shop-online', 'cake-designer', 'contact-us']

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.cart
  }

  activeCartMenu() {
    this.cartMenuIsActive = !this.cartMenuIsActive
  }

  onGetTotalCartPrice(items: ShopProduct[]) {
    return this.cartService.getTotalCartPrice(items)
  }

  showCartCounter(items: ShopProduct[]) {
    return this.cart.items.length
  }
}
