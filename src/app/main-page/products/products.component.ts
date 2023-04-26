import { Component, OnInit } from '@angular/core';
import { ProductsCard } from './products-card.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsCards: ProductsCard[] = [
    new ProductsCard(
      'artistic cakes',
      'In our workshop, we create beautiful and delicious cakes for various occasions. You can choose both the appearance and the flavors yourself. If you wish, we can also send you a detailed design of your future cake. We will do our best to meet all your requirements.',
      'cake-designer',
      'assets/img/cake_small.jpg'
    ),
    new ProductsCard(
      'cookies and sweets',
      'In our offer, you will find many ready-made cakes and sweets that you can order for any day without leaving your home. Visit our online store to see the current offer.',
      'shop-online',
      'assets/img/sweets_small.jpg'),
    new ProductsCard(
      'events',
      'If you are interested in using our services for your party, please contact us so that we can create your sweet paradise together. We cater for events such as birthdays, bachelorette and bachelor parties, weddings, and many others.',
      'contact-us',
      'assets/img/sweettable_small.jpg'
    )]

  constructor() {
  }

  ngOnInit() {
  }
}
