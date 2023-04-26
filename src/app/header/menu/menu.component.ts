import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/cart/cart.model';
import { CartService } from 'src/app/cart/cart.service';
import { FavouritesService } from 'src/app/favourites/favourites.service';
import { ShopProduct } from 'src/app/shop-online/shop-products/shop-products.model';
import { HeaderService, Mode } from '../header.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  activeMode: Mode | '' = '';
  cart: Cart = {items: []};
  favourites: Cart = {items: []};

  constructor(private headerService: HeaderService, private cartService : CartService, private favouritesService: FavouritesService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartService.cartChanges.subscribe(cart => this.cart = cart);
    this.activeMode = this.headerService.activeMode;
    this.headerService.modeChange.subscribe(mode => this.activeMode = mode);
    this.favourites = this.favouritesService.favourites;
    this.favouritesService.favouritesChange.subscribe(favourites => this.favourites = favourites);
  }

  onGetTotalCartPrice(items: ShopProduct[]) {
    return this.cartService.getTotalCartPrice(items);
  }

  onClearFav() {
    this.favourites.items = [];
    this.activeMode = '';
  }

  onClearCart() {
    this.cartService.clearCart();
    this.activeMode = '';
  }
}
