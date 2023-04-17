import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/alert/alert.service';
import { Cart } from 'src/app/cart/cart.model';
import { CartService } from 'src/app/cart/cart.service';
import { FavouritesService } from 'src/app/favourites/favourites.service';
import { ShopOnlineService } from '../shop-online.servis';
import { Layout } from '../shop-settings/shop-settings.model';
import { ShopProduct } from './shop-products.model';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent implements OnInit {

selectedLayout: Layout = 'grid';
selectedLayoutSub!: Subscription;

selectedAmount: number = 8;
selectedAmountSub!: Subscription;

productsToShow : ShopProduct[] = [];
productsSub!: Subscription;

favourites: Cart = {items: []};

activeAlert : boolean = false;

page: number = 1;
count: number = 0;

  constructor(private shopOnlineService : ShopOnlineService, private alertService: AlertService, private cartService: CartService,  private favouritesService: FavouritesService) {}

  ngOnInit(): void {
    this.favouritesService.localFavourites();
    this.selectedLayoutSub = this.shopOnlineService.layoutChanges.subscribe(layout => this.selectedLayout = layout);
    this.selectedAmountSub = this.shopOnlineService.amountChanges.subscribe(amount => this.selectedAmount = amount);
    this.productsSub = this.shopOnlineService.productsChanges.subscribe(products => this.productsToShow = products);
    this.shopOnlineService.showProducts();
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
      this.favouritesService.removeFromFavourites(product);
    }
  }

  onCheckFavourites(product: ShopProduct) {
    return this.favouritesService.checkFavourites(product);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.shopOnlineService.productsChanges.subscribe(products => {
      this.productsToShow = products;
    })
  }

  ngOnDestroy() {
    this.selectedLayoutSub.unsubscribe();
    this.selectedAmountSub.unsubscribe();
    this.productsSub.unsubscribe();
  }
}
