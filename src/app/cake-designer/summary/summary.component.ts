import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/alert/alert.service';
import { CartService } from 'src/app/cart/cart.service';
import { ShopProduct, shopProducts } from 'src/app/shop-online/shop-products/shop-products.model';
import { CakeDesignerService } from '../cake-designer.service';
import { Cake } from '../desig-element.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
})
export class SummaryComponent implements OnInit {

  createdCake!: Cake;
  totalCakePrice!: number;
  cakeAddedToCart = false;
  activeAlert: boolean = false;

  selectedDate: string = '';

  constructor(private cakeDesignerService: CakeDesignerService, private cartService: CartService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.onCreateNewCake();
    this.getCake();
    this.alertService.activeAlertChange.subscribe(alert => this.activeAlert = alert);
  }

  onSelectDate(date: string) {
    this.selectedDate = date;
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

    usedId.push(randomId);
    return randomId;
  }

  onAddCakeToCart(cake: Cake) {
    const cakeId: number = this.generateId();
    const cakeName: string = `${cake.type.name} ${cake.size.name} cake`;
    const cakeDescription: string = `${cake.floor.map(floor => `floor ${floor.name} : ${floor.color.name} color, ${floor.flavour.name} flavour and ${floor.cream.name} cream`)} ${cake.details.length ? ', details : ' + cake.details.map(detail => " " + detail.name) : ''}`;

    const cakeToShop : ShopProduct = new ShopProduct(cakeId , 1, cakeName, cakeDescription, cake.size.imagePath, this.totalCakePrice, 'cakes');

    const cakeInShop = this.cartService.cart.items.find(item => item.name === cakeToShop.name && item.description === cakeToShop.description);
    if(!cakeInShop) {
      this.cartService.addToCart(cakeToShop);
      this.alertService.activateAlert(cakeToShop);
    } else {
      cakeInShop.quantity++;
    }

    this.cakeDesignerService.clearSelectedElements();
    this.selectedDate = '';
  }
}
