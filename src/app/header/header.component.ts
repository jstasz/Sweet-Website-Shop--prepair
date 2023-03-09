import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';
import { FavouritesService } from '../favourites/favourites.service';
import { ShopProduct } from '../shop-online/shop-products/shop-product/product.model';
import { HeaderService, Mode } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeMode : Mode | '' = '';

  cart: Cart = {items: []};
  favourites: Cart = {items: []};

  navLinks: string[] = ['shop-online', 'cake-designer', 'contact-us'];

  constructor(private cartService: CartService, private headerService : HeaderService, private favouritesService: FavouritesService) { }

  ngOnInit() {
    this.cartService.cartChanges.subscribe(cart => this.cart = cart);
    this.headerService.modeChange.subscribe(mode => this.activeMode = mode);
    this.favourites = this.favouritesService.favourites;
    this.favouritesService.favouritesChange.subscribe(favourites => this.favourites = favourites)
  }

  onActivateMode(mode: Mode) {
    this.headerService.activateMode(mode);
  }

  onDisactivateMode() {
    this.headerService.disactivateMode();
  }

  onShowCounter(element: Cart) {
    return this.headerService.counter(element)
  }
}
