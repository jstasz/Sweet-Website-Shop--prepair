import { Component, OnInit } from '@angular/core';
import { ShopOnlineService } from '../shop-online/shop-online.servis';
import { AlertService } from '../alert/alert.service';
import { ShopProduct } from '../shop-online/shop-products/shop-products.model';
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
  activeAlert: boolean = false;

  count = 0;
  page = 1;
  tableSize: number = 10;

  constructor(private cartService: CartService, private alertService: AlertService ,private shopOnlineService: ShopOnlineService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.activeAlert = this.alertService.activeAlert;
    this.alertService.activeAlertChange.subscribe(alert => this.activeAlert = alert);
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

  onRemoveFromCart(item: ShopProduct,index: number) {
    return this.cartService.removeFromCart(item, index)
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

  onSubmitOrder() {
    this.activeAlert = true;
    this.alertService.activateAlert(null);
    this.cartService.clearCart();
  }
}
