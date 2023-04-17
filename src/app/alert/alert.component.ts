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
  orderMessage: string = 'Your order has been accepted for processing. Please be patient and wait for further information, which will be provided by email. We will keep you updated on the progress of your order.';
  contactMessage: string = 'Thank you for contacting us! We will respond as soon as possible.';

  constructor(private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.product= this.alertService.product;
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
