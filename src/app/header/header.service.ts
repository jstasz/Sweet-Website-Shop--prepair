import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Cart } from "../cart/cart.model";
import { ShopProduct } from "../shop-online/shop-products/shop-product/product.model";

export type Mode = 'cart' | 'favourites'

@Injectable()
export class HeaderService {

    activeMode : Mode | '' = '';
    modeChange = new Subject<Mode | ''>()

    disactiveModeTime: any = '';

    constructor() {}

    activateMode(mode: Mode) {
        clearTimeout(this.disactiveModeTime);
        this.activeMode = mode;
        this.modeChange.next(this.activeMode);
    }

    disactivateMode() {
        this.disactiveModeTime = setTimeout(() => {
            this.activeMode = '';
            this.modeChange.next(this.activeMode)
          }, 500)
    }

    counter(element: Cart) {
        return element.items.map(item => item.quantity).reduce((prev, curr) => prev + curr);
    }
}