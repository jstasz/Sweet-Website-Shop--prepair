import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';

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
}
