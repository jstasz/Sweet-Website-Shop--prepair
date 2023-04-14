import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/cart/cart.model';
import { CartService } from 'src/app/cart/cart.service';
import { FavouritesService } from 'src/app/favourites/favourites.service';
import { ShopOnlineService } from '../../shop-online.servis';
import { AlertService } from '../../../alert/alert.service';
import { Layout } from '../../shop-settings/shop-settings.model'
import { ShopProduct } from '../shop-products.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {

selectedLayout: Layout = 'grid';
selectedLayoutSub!: Subscription;

selectedAmount: number = 8;
selectedAmountSub!: Subscription;

shopProducts: ShopProduct[] = [];
productsSub!: Subscription;

favourites: Cart = {items: []};

activeAlert : boolean = false;

page: number = 1;
count: number = 0;

  constructor(private cartService: CartService, private alertService: AlertService, private shopOnlineService: ShopOnlineService, private favouritesService: FavouritesService) { }

  ngOnInit(): void {
    this.selectedLayoutSub = this.shopOnlineService.layoutChanges.subscribe(layout => this.selectedLayout = layout);
    this.selectedAmountSub = this.shopOnlineService.amountChanges.subscribe(amount => this.selectedAmount = amount);
    this.productsSub = this.shopOnlineService.productsChanges.subscribe(products => this.shopProducts = products);
    this.alertService.activeAlertChange.subscribe(alert => this.activeAlert = alert);
  }

  onAddToCart(product: ShopProduct) {
    this.cartService.addToCart(product);
  }

  onAddToFavourites(product: ShopProduct){
    const fav = this.onCheckFavourites(product); 

    if(!fav) {
      this.favouritesService.addToFavourites(product);
    } else {
      const index = this.favourites.items.indexOf(product);
      this.favouritesService.removeFromFavourites(index);
    }
  }

  onCheckFavourites(product: ShopProduct) {
    return this.favouritesService.checkFavourites(product);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.shopOnlineService.productsChanges.subscribe(products => {
      this.shopProducts = products;
    })
  }

  ngOnDestroy() {
    this.selectedLayoutSub.unsubscribe();
    this.selectedAmountSub.unsubscribe();
    this.productsSub.unsubscribe();
  }
}
