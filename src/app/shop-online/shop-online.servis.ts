import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Layout } from "./shop-products/products.model";

@Injectable()
export class ShopOnlineService {
    selectedLayout: Layout = 'grid'
    layoutChanges = new Subject<Layout>()

    constructor() {}

    changeLayout(layout: Layout) {
        this.selectedLayout = layout
        this.layoutChanges.next(layout)
    }
}