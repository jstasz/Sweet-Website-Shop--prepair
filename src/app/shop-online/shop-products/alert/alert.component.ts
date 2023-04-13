import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopProduct } from '../shop-product/product.model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  product! : ShopProduct | null;

  constructor(private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.product = this.alertService.product;
  }

  onCloseAlert() {
    this.alertService.closeAlert();
  }

  onGoToCart() {
    this.onCloseAlert();
    this.router.navigate(['cart']);
  }
}
