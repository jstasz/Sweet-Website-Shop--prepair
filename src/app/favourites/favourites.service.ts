import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Cart } from "../cart/cart.model";
import { ShopProduct } from "../shop-online/shop-products/shop-product/product.model";


@Injectable()
export class FavouritesService {

    favourites: Cart = {items: [new ShopProduct(40, 1, 'Cake6', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque', 'https://static5.hurtownia-fajerwerki.pl/pol_pl_Swi…ki-urodzinowe-gladkie-zlote-6-cm-6-szt-1034_5.jpg', 100, 'cakes')]};
    favouritesChange = new Subject<Cart>();
    
    constructor() {}

}