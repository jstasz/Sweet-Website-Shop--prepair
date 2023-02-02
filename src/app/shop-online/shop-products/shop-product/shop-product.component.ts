import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart,} from 'src/app/cart/cart.model';
import { CartService } from 'src/app/cart/cart.service';
import { Layout } from '../products.model';
import { ShopProduct } from './product.model';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {

@Input() layout: Layout = 'grid'

shopProducts : ShopProduct[] = [
{id: 1, name: 'Cake1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes', quantity: 1},
{id: 2, name: 'Cake2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes', quantity: 1},
{id: 3, name: 'Cake3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes', quantity: 1},
{id: 4, name: 'Cake4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes', quantity: 1},
{id: 5, name: 'Cake5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes', quantity: 1},
{id: 6, name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes', quantity: 1}
]

@Output() addToCart = new EventEmitter<ShopProduct>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart(product: ShopProduct) {
    this.cartService.addToCart(product)
  }

}
