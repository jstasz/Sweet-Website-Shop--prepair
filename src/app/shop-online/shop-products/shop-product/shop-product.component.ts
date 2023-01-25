import { Component, OnInit } from '@angular/core';
import { ShopProduct } from './product.model';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {

shopProducts : ShopProduct[] = [
{name: 'Cake1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes'},
{name: 'Cake2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes'},
{name: 'Cake3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes'},
{name: 'Cake4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes'},
{name: 'Cake5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes'},
{name: 'Cake6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', imagePath: 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-e1563420600943.jpg', price: 50, category: 'cakes'}
]

  constructor() { }

  ngOnInit(): void {
  }

}
