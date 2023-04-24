import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { ShopProduct } from '../shop-online/shop-products/shop-products.model';
import { Cart} from './cart.model';
import { CartService } from './cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../auth/user.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart = {items: []};
  totalPrice: number = 0;
  activeAlert: boolean = false;
  loggedUser: User | '' = '';

  orderForm!: FormGroup;

  count = 0;
  page = 1;
  tableSize: number = 10;

  constructor(private cartService: CartService, private alertService: AlertService, private authService: AuthService) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      'date': new FormControl(null, [Validators.required]),
      'userEmail': new FormControl(null, [Validators.required, Validators.email])
    });
    this.cart = this.cartService.cart;
    this.loggedUser = this.authService.loggedUser;
    this.authService.loggedUserChanges.subscribe(user => this.loggedUser = user);
    this.activeAlert = this.alertService.activeAlert;
    this.alertService.activeAlertChange.subscribe(alert => this.activeAlert = alert);
  }

  getCurrentDate() {
    const today = new Date();
    today.setDate(today.getDate() + 3);
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }

  getTotalPrice(item: ShopProduct) {
    return item.quantity * item.price;
  }

  onGetTotalCartPrice(items: ShopProduct[]) {
    return this.cartService.getTotalCartPrice(items);
  }

  onAddToCart(item: ShopProduct) {
    this.cartService.addToCart(item);
  }

  onRemoveFromCart(item: ShopProduct,index: number) {
    return this.cartService.removeFromCart(item, index);
  }

  onChangeQuantity(item: ShopProduct, index: number) {
    this.cartService.changeQuantity(item, index);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.cartService.cartChanges.subscribe(cart => this.cart = cart);
  }

  onLogOut() {
    this.authService.logOutUser();
  }

  onSubmitOrder() {
    let date = this.orderForm.value.date;
    let userEmail = this.loggedUser ? this.loggedUser.email : (this.orderForm.value.userEmail);
    this.cartService.sendOrder(date, userEmail);

    this.activeAlert = true;
    this.alertService.activateAlert(null);
    this.cartService.clearCart();
  }
}
