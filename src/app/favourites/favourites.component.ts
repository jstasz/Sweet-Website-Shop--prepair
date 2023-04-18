import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';
import { ShopProduct } from '../shop-online/shop-products/shop-products.model';
import { FavouritesService } from './favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favourites: Cart = {items: []};
  activeAlert: boolean = false;

  count = 0;
  page = 1;
  tableSize: number = 5;

  constructor(private favouritesService: FavouritesService, private cartService : CartService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.favourites = this.favouritesService.favourites;
    this.favouritesService.favouritesChange.subscribe(favourites => this.favourites = favourites);
    this.alertService.activeAlertChange.subscribe(alert => this.activeAlert = alert);
  }

  onAddToCart(item : ShopProduct) {
    this.cartService.addToCart(item);
  } 

  onRemoveFromFavourites(product: ShopProduct) {
    this.favouritesService.removeFromFavourites(product), 2000;
  }

  onClearFavourites() {
    this.favouritesService.clearFavourites();
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.favouritesService.favouritesChange.subscribe(favourite => this.favourites = favourite);
  }

  onCheckFavourites(item : ShopProduct) {
    return this.favouritesService.checkFavourites(item);
  }
}
