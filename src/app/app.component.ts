import { Component, ViewEncapsulation } from '@angular/core';
import { CartService } from './cart/cart.service';
import { FavouritesService } from './favourites/favourites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'sweet-website-shop';

  constructor(private favouritesService: FavouritesService, private cartService: CartService) {}

  ngOnInit() {
    this.favouritesService.localFavourites();
    this.cartService.localCart();
  }
}
