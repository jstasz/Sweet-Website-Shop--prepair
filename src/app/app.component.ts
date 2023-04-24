import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './auth/auth.service';
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

  constructor(private favouritesService: FavouritesService, private cartService: CartService, private authService: AuthService) {}

  ngOnInit() {
    this.authService.checkUser();
    this.favouritesService.localFavourites();
    this.cartService.localCart();
  }
}
