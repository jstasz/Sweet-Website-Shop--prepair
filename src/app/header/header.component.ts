import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavIcon } from './nav-icons.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: string[] = ['shop online', 'cake designer', 'contact us']

  shoppingIcons: NavIcon[] = [
    new NavIcon('home', 'assets/img/icons/home.png', ''),
    new NavIcon('favourites', 'assets/img/icons/favourites.png', 'favourites'),
    new NavIcon('cart', 'assets/img/icons/cart.png', 'cart')
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavIcon(icon: NavIcon) {
    icon.name === 'home' ? this.router.navigate(['/']) : this.router.navigate(['/' + icon.name])
  }

  onNavLink(link: string) {
    const linkPath = link.replace(' ', '-')
    this.router.navigate(['/' + linkPath])
    console.log(linkPath)
  }
}
