import { Component, Input, OnInit } from '@angular/core';
import { Amount, Layout, Sort } from './products.model';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent implements OnInit {
  selectedSort: Sort = 'name';
  selectedAmount: Amount = '6';
  selectedLayout: Layout = 'grid';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectLayout(layout: Layout) {
    this.selectedLayout = layout;
  }
}
