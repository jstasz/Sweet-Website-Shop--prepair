import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ShopProduct } from '../shop-online/shop-products/shop-products.model';

@Injectable()
export class AlertService {
    product : ShopProduct | null = null;
    activeAlert : boolean = false;
    activeAlertChange = new Subject<boolean>();

    constructor() {}

    activateAlert(product: ShopProduct | null) {
        this.product = product;
        this.activeAlert = true;
        this.activeAlertChange.next(this.activeAlert);
    }

    closeAlert() {
        this.activeAlert = false;
        this.activeAlertChange.next(this.activeAlert);
    }
}




