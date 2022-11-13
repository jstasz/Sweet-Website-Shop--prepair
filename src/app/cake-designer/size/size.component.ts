import { Component, OnInit } from '@angular/core';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  selectedSize = false;
  sizeOfCake = ''

  cakeSize: DesignElement[] = [
    new DesignElement('single', '../../../assets/img/create-cake/size/single.webp'),
    new DesignElement('double', '../../../assets/img/create-cake/size/double.jpeg', 12.99),
    new DesignElement('triple', '../../../assets/img/create-cake/size/triple.jpeg', 22.99),
  ]

  constructor() { }

  ngOnInit() {
  }

  onAddElement(element: DesignElement) {
    this.selectedSize = true;
    this.sizeOfCake = element.name
    console.log(`selected size: ${this.sizeOfCake}`)
  }

  onRemoveElement(element: DesignElement) {
    this.selectedSize = false;
    this.sizeOfCake = '';
  }


}
