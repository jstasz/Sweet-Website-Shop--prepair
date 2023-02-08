import { Component, OnInit} from '@angular/core';
import { ShopOnlineService } from '../../shop-online.servis';
import { Amount, Layout, Sort } from '../products.model';

@Component({
  selector: 'app-shop-filters',
  templateUrl: './shop-filters.component.html',
  styleUrls: ['./shop-filters.component.scss']
})
export class ShopFiltersComponent implements OnInit {

  selectedSort: Sort = 'category';
  selectedAmount: Amount = '4';
  selectedLayout: Layout = 'grid';

  constructor(private shopOnlineService: ShopOnlineService) { }

  ngOnInit(): void {
    this.onSelectSort(this.selectedSort);
  }

  onSelectLayout(layout: Layout) {
    this.shopOnlineService.selectLayout(layout);
  }

  onSelectSort(sort: Sort) {
    this.shopOnlineService.selectSort(sort);
  }
}
