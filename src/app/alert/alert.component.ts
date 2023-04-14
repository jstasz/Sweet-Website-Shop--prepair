import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopProduct } from '../shop-online/shop-products/shop-products.model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  product! : ShopProduct | null;
  activeMode: string = '';

  constructor(private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.product = this.alertService.product;
    this.getActiveMode();
  }

  getActiveMode() {
    const url = this.router.url.split('/');
    this.activeMode = url[1];
  }

  onCloseAlert() {
    this.alertService.closeAlert();
  }

  onRedirect(path: string) {
    this.onCloseAlert();
    this.router.navigate([path]);
  }
}
