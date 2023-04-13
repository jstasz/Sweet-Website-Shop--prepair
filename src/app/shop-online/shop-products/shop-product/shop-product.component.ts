import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/cart/cart.model';
import { CartService } from 'src/app/cart/cart.service';
import { FavouritesService } from 'src/app/favourites/favourites.service';
import { ShopOnlineService } from '../../shop-online.servis';
import { AlertService } from '../alert/alert.service';
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
favourites: Cart = {items: []};
activeAlert : boolean = false;

page: number = 1;
count: number = 0;
tableSize: number = 8;

  constructor(private cartService: CartService, private alertService: AlertService, private shopOnlineService: ShopOnlineService, private favouritesService: FavouritesService) { }

  ngOnInit(): void {
    this.shopOnlineService.productsChanges.subscribe(products => this.shopProducts = products)
    this.shopOnlineService.layoutChanges.subscribe(layout => this.layout = layout);
    this.favouritesService.favouritesChange.subscribe(favourites => this.favourites = favourites);
    this.shopOnlineService.showProducts();
    this.getTableSize();
    this.activeAlert = this.alertService.activeAlert;
    this.alertService.activeAlertChange.subscribe(alert => this.activeAlert = alert);
  }

  onAddToCart(product: ShopProduct) {
    this.cartService.addToCart(product);
    this.alertService.activateAlert(product);
  }

  onAddToFavourites(product: ShopProduct){
    const fav = this.onCheckFavourites(product); 
    if(!fav) {
      this.favouritesService.addToFavourites(product);
    } else {
      const index = this.favourites.items.indexOf(product)
      this.favouritesService.removeFromFavourites(index)
    }
  }

  onCheckFavourites(product: ShopProduct) {
    return this.favouritesService.checkFavourites(product)
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.shopOnlineService.productsChanges.subscribe(products => {
      this.shopProducts = products;
    })
  }

  getTableSize() {
    this.shopOnlineService.tableSizeChanges.subscribe(tableSize => this.tableSize = tableSize )
    this.page = this.shopOnlineService.page;
  }
}
