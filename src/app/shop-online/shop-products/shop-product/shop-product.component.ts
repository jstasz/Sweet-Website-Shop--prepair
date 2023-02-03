import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Category } from '../../shop-categories/categories.model';
import { ShopOnlineService } from '../../shop-online.servis';
import { Layout } from '../products.model';
import { ShopProduct } from './product.model';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {

@Input() layout: Layout = 'grid';
shopProducts : ShopProduct[] = [];
category: Category[] = [];

  constructor(private cartService: CartService, private shopOnlineService: ShopOnlineService) { }

  ngOnInit(): void {
    this.shopOnlineService.productsChanges.subscribe(products => {
      this.shopProducts = products
    })
  }

  onAddToCart(product: ShopProduct) {
    this.cartService.addToCart(product)
  }

  onShowCategory(category: Category) {
    this.shopOnlineService.selectCategory(category)
  }
}
