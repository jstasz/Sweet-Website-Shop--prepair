import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopOnlineService } from '../shop-online.servis';
import { Layout } from './products.model';
import { ShopProduct } from './shop-product/product.model';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent implements OnInit {
  selectedLayout: Layout = 'grid';
  selectedLayoutSub!: Subscription;
  
  productsToShow : ShopProduct[] = [];

  constructor(private shopOnlineService : ShopOnlineService) { }

  ngOnInit(): void {
    this.shopOnlineService.layoutChanges.subscribe(layout => {
      this.selectedLayout = layout
    })
    this.productsToShow = this.shopOnlineService.productsToShow;
    this.shopOnlineService.productsChanges.subscribe(products => this.productsToShow = products);
    this.shopOnlineService.showProducts();
  }

  ngOnDestroy() {
    this.selectedLayoutSub.unsubscribe();
  }
}
