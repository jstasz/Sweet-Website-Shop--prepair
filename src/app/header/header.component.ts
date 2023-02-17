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

  navLinks: string[] = ['shop-online', 'cake-designer', 'contact-us'];

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartChanges.subscribe(cart => this.cart = cart)
  }

  activeCartMenu() {
    this.cartMenuIsActive = !this.cartMenuIsActive;
  }

  onGetTotalCartPrice(items: ShopProduct[]) {
    return this.cartService.getTotalCartPrice(items);
  }

  showCartCounter() {
    return this.cart.items.map(items => items.quantity).reduce((prev, curr) => prev + curr);
  }

  onClearCart() {
    return this.cartService.clearCart();
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.cartService.cartChanges.subscribe(cart => this.cart = cart)
  }

  tableSizeChange(event: any) {
    this.tableSize = event.target.value
    this.page = 1;
    this.cartService.cartChanges.subscribe(cart => this.cart = cart)
  }
}
