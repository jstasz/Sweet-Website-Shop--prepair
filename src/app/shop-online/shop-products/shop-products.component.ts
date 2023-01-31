import { Component, OnInit } from '@angular/core';
import { ShopOnlineService } from '../shop-online.servis';
import { Layout } from './products.model';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent implements OnInit {
  selectedLayout: Layout = 'grid'

  constructor(private shopOnlineService : ShopOnlineService) { }

  ngOnInit(): void {
    this.shopOnlineService.layoutChanges.subscribe(layout => {
      this.selectedLayout = layout
    })
  }
}
