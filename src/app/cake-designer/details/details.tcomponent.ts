import { Component, OnInit } from '@angular/core';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-decoration',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  cakeDetails: DesignElement[] = [
    new DesignElement('candles', '../../../assets/img/create-cake/details/candles.jpg'),
    new DesignElement('topper', '../../../assets/img/create-cake/details/topper.jpeg'),
    new DesignElement('cookiese', '../../../assets/img/create-cake/details/cookies.jpeg'),
    new DesignElement('balloons', '../../../assets/img/create-cake/details/balloons.jpeg'),
    new DesignElement('flare', '../../../assets/img/create-cake/details/flare.jpeg'),
    new DesignElement('flowers', '../../../assets/img/create-cake/details/flowers.jpeg'),
    new DesignElement('sweets', '../../../assets/img/create-cake/details/sweets.jpeg'),
    new DesignElement('alcohol', '../../../assets/img/create-cake/details/alcohol.jpeg'),
    new DesignElement('ganage', '../../../assets/img/create-cake/details/ganage.jpeg'),
  ]

  constructor() { }

  ngOnInit() {
  }



}
