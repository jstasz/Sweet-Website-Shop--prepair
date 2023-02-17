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

  page = 0;
  tableSize: number = 10;
  count: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart
  }

  getTotalPrice(item: ShopProduct) {
    return item.quantity * item.price
  }

  onGetTotalCartPrice(items: ShopProduct[]) {
    return this.cartService.getTotalCartPrice(items)
  }

  onAddToCart(item: ShopProduct) {
    this.cartService.addToCart(item)
  }

  onRemoveFromCart(index: number) {
    return this.cartService.removeFromCart(index)
  }

  onChangeQuantity(item: ShopProduct, index: number) {
    this.cartService.changeQuantity(item, index)
  }

  onClearCart() {
    this.cartService.clearCart()
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.cartService.cartChanges.subscribe(cart => this.cart = cart)
  }
}
