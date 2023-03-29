import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { ShopOnlineService } from '../../shop-online.servis';
import { ShopProduct } from '../shop-product/product.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  product! : ShopProduct;

  constructor(private cartService : CartService, private shopOnlineService : ShopOnlineService, private router: Router) { }

  ngOnInit(): void {
    this.product = this.cartService.itemAdded;
    this.cartService.itemAddedChange.subscribe(item => this.product= item);
  }

  onCloseAlert() {
    this.shopOnlineService.closeAlert();
  }

  onGoToCart() {
    this.onCloseAlert();
    this.router.navigate(['cart']);
  }
}
