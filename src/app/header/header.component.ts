import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';
import { FavouritesService } from '../favourites/favourites.service';
import { HeaderService, Mode } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeMode : Mode = null;
  activeMenu: boolean = false;

  @ViewChild('mainImage') mainImage!: ElementRef;
  mainImageHeight: number = 0;
  scrollPosition: number = 0;

  cart: Cart = {items: []};
  favourites: Cart = {items: []};

  navLinks: string[] = ['shop-online', 'cake-designer', 'contact-us'];

  constructor(private cartService: CartService, private headerService : HeaderService, private favouritesService: FavouritesService) { }

  ngOnInit() {
    this.cartService.cartChanges.subscribe(cart => this.cart = cart);
    this.headerService.modeChange.subscribe(mode => this.activeMode = mode);
    this.favourites = this.favouritesService.favourites;
    this.favouritesService.favouritesChange.subscribe(favourites => this.favourites = favourites);
  }

  ngAfterViewInit() {
    const mainImageHeight = this.mainImage.nativeElement.offsetHeight;
    this.mainImageHeight = mainImageHeight;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollPosition = (scrollY / this.mainImageHeight) * 100;
    this.scrollPosition = scrollPosition;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.mainImageHeight = this.mainImage.nativeElement.offsetHeight;
  }

  onActivateMode(mode: Mode) {
    this.headerService.activateMode(mode);
  }

  onDisactivateMode() {
    this.headerService.disactivateMode();
  }

  onShowCounter(element: Cart) {
    return this.headerService.counter(element);
  }

  onActiveMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
