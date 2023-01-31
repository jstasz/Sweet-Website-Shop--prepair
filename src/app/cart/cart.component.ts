import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [{
    product: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg',
    name: 'cake',
    price: 150,
    quantity: 2,
    id: 1
  },
  {
    product: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg',
    name: 'cake',
    price: 100,
    quantity: 5,
    id: 1
  }]}
  dataSource: CartItem[] = []
  totalPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

  getTotalPrice(item: CartItem) {
    return item.quantity * item.price
  }

  getTotalCart(items: CartItem[]) {
    return items.map((item) => item.price * item.quantity).reduce((prev, cur) => prev + cur, 0)
  }
}
