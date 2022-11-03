import { Component, OnInit } from '@angular/core';
import { ProductsCard } from './products-card.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsCards: ProductsCard[] = [
    new ProductsCard('artistic cakes',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sintut nisi debitis illo voluptate doloremque sequi ullam quisquam Loremipsum dolor sit amet consectetur adipisicing elit. Nam cumque sequi ipsum distinctio delectus accusamus',
      'create your cake',
      './img/cake_small.jpg'
    ),
    new ProductsCard('cookies and sweets',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sin ut nisi debitis illo voluptate doloremque sequi ullam quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque',
      'shop online',
      './img/sweets_small.jpg'),
    new ProductsCard('events',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint Illum sin ut nisi debitis illo voluptate doloremque sequi ullam quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque',
      'contact us',
      './img/sweettable_small.jpg'
    )]

  constructor() {
  }

  ngOnInit() {
  }


}
