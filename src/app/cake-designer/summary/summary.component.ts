import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ShopProduct, shopProducts } from 'src/app/shop-online/shop-products/shop-product/product.model';
import { CakeDesignerService } from '../cake-designer.service';
import { Cake } from '../desig-element.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  createdCake!: Cake;
  totalCakePrice!: number;
  cakeAddedToCart = false;

  constructor(private cakeDesignerService: CakeDesignerService, private cartService: CartService) { }

  ngOnInit(): void {
    this.onCreateNewCake();
    this.getCake();
  }

  onCreateNewCake() {
    this.cakeDesignerService.createCake();
  }

  getCake() {
    this.createdCake = this.cakeDesignerService.cake;
    this.totalCakePrice = this.cakeDesignerService.totalCakePrice;
  }

  generateId() {
    const usedId: number[] = shopProducts.map(prod => prod.id);

    let randomId : number;
    do {
      randomId = Math.floor(Math.random() * 100);
    } while (usedId.includes(randomId));

    usedId.push(randomId)
    return randomId
  }

  onAddCakeToCart(cake: Cake) {
    const cakeId: number = this.generateId();
    const cakeName: string = `${cake.type.name} ${cake.size.name} cake`;
    const cakeDescription: string = `${cake.floor.map(floor => `floor ${floor.name} : ${floor.color.name} color, ${floor.flavour.name} flavour and ${floor.cream.name} cream`)} ${cake.details.length ? ', details : ' + cake.details.map(detail => " " + detail.name) : ''}`;

    const cakeToShop : ShopProduct = new ShopProduct(cakeId , 1, cakeName, cakeDescription, cake.size.imagePath, this.totalCakePrice, 'cakes');

    const cakeInShop = this.cartService.cart.items.find(item => item.name === cakeToShop.name && item.description === cakeToShop.description)
    if(!cakeInShop) {
      this.cartService.addToCart(cakeToShop)
    } else {
      cakeInShop.quantity ++
    }
  }
}
