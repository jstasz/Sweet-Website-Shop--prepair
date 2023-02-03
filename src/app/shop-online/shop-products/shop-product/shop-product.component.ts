import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ShopOnlineService } from '../../shop-online.servis';
import { Layout } from '../products.model';
import { ShopProduct } from './product.model';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {

@Input() layout: Layout = 'grid'
shopProducts : ShopProduct[] = [];

  constructor(private cartService: CartService, private shopOnlineService: ShopOnlineService) { }

  ngOnInit(): void {
    this.shopProducts = this.shopOnlineService.shopProducts
  }

  onAddToCart(product: ShopProduct) {
    this.cartService.addToCart(product)
  }
}
