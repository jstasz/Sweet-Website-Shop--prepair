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
  selectedAmount: Amount = 8;
  selectedLayout: Layout = 'grid';
  tableSize: Amount = 8;
  page: number = 1;
  amountToSelect: Amount[] = [4, 8, 12];

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

  onTableSizeChange(event: any) {
    this.shopOnlineService.tableSizeChange(event);
    this.tableSize = this.shopOnlineService.tableSize;
    this.page = this.shopOnlineService.page;
  }
}
