import { Component, OnInit } from '@angular/core';
import { ShopProduct } from '../shop-online/shop-products/shop-product/product.model';
import { Cart} from './cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart = {items: []}
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart
  }

  getTotalPrice(item: ShopProduct) {
    return item.quantity * item.price
  }

  getTotalCart(items: ShopProduct[]) {
    return items.map((item) => item.price * item.quantity).reduce((prev, cur) => prev + cur, 0)
  }
}
