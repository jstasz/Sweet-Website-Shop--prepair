import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartMenuIsActive = false;

  navLinks: string[] = ['shop-online', 'cake-designer', 'contact-us']

  constructor() { }

  ngOnInit() {
  }

  activeCartMenu() {
    this.cartMenuIsActive = !this.cartMenuIsActive
  }
}
