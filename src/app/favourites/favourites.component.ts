import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { FavouritesService } from './favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favourites: Cart = {items: []};

  constructor(private favouritesService: FavouritesService) { }

  ngOnInit(): void {
    this.favourites = this.favouritesService.favourites;
    this.favouritesService.favouritesChange.subscribe(favourites => this.favourites = favourites);
  }
}
