import { Component, OnInit } from '@angular/core';
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

layout: Layout = 'grid';
shopProducts : ShopProduct[] = [];

title: string = 'pagination';
POSTS: any;
page: number = 1;
count: number = 0;
tableSize: number = 10;
tableSizes: any = [4, 8, 12]


  constructor(private cartService: CartService, private shopOnlineService: ShopOnlineService) { }

  ngOnInit(): void {
    this.shopOnlineService.productsChanges.subscribe(products => {
      this.shopProducts = products;
    })
    this.shopOnlineService.layoutChanges.subscribe(layout => this.layout = layout);
    this.shopOnlineService.showAllProducts();
  }

  onAddToCart(product: ShopProduct) {
    this.cartService.addToCart(product);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.shopOnlineService.productsChanges.subscribe(products => {
      this.shopProducts = products;
    })
  }

  onTableSizeChange(event: any) {
    this.tableSize= event.target.value
    this.page = 1;
    this.shopOnlineService.productsChanges.subscribe(products => {
      this.shopProducts = products;
    })
  }
}
