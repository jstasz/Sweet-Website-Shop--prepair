import { Component, OnInit } from '@angular/core';
import { NavIcons } from './nav-icons.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: String[] = ['shop online', 'cake designer', 'contact us']

  shoppingIcons: NavIcons[] = [
    new NavIcons('home', 'assets/img/icons/home.png'),
    new NavIcons('favourite', 'assets/img/icons/favourite.png'),
    new NavIcons('cart', 'assets/img/icons/cart.png')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
