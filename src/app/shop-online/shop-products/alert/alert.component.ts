import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ShopProduct } from '../shop-product/product.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  product! : ShopProduct;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.product = this.cartService.itemAdded;
    this.cartService.itemAddedChange.subscribe(item => this.product= item);
  }
}
