import { Component, OnInit } from '@angular/core';
import { NavIcon } from './nav-icons.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: string[] = ['shop-online', 'cake-designer', 'contact-us']

  shoppingIcons: NavIcon[] = [
    new NavIcon('home', 'assets/img/icons/home.png', ''),
    new NavIcon('favourites', 'assets/img/icons/favourites.png', 'favourites'),
    new NavIcon('cart', 'assets/img/icons/cart.png', 'cart')
  ]

  constructor() { }

  ngOnInit() {
  }
}
