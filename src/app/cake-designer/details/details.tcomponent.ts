import { Component, OnInit } from '@angular/core';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-decoration',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  detailOfCake: string[] = [];

  cakeDetails: DesignElement[] = [
    new DesignElement('candles', '../../../assets/img/create-cake/details/candles.jpg', 1.99),
    new DesignElement('topper', '../../../assets/img/create-cake/details/topper.jpeg', 3.99),
    new DesignElement('cookiese', '../../../assets/img/create-cake/details/cookies.jpeg', 6.99),
    new DesignElement('balloons', '../../../assets/img/create-cake/details/balloons.jpeg', 7.99),
    new DesignElement('flare', '../../../assets/img/create-cake/details/flare.jpeg', 3.99),
    new DesignElement('flowers', '../../../assets/img/create-cake/details/flowers.jpeg', 7.99),
    new DesignElement('sweets', '../../../assets/img/create-cake/details/sweets.jpeg', 9.99),
    new DesignElement('alcohol', '../../../assets/img/create-cake/details/alcohol.jpeg', 11.99),
    new DesignElement('ganage', '../../../assets/img/create-cake/details/ganage.jpeg', 8.99),
  ]

  constructor() { }

  ngOnInit() {
  }

  onAddElement(element: DesignElement) {
    this.detailOfCake.push(element.name)
  }

  onRemoveElement(element: DesignElement) {
    this.detailOfCake.splice(this.detailOfCake.indexOf(element.name), 1)
  }
}

