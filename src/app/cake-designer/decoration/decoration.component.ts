import { Component, OnInit } from '@angular/core';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrls: ['./decoration.component.scss']
})
export class DecorationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cakeDecorations: DesignElement[] = [
    new DesignElement('candles', '../../../assets/img/create-cake/decorations/candles.jpg'),
    new DesignElement('topper', '../../../assets/img/create-cake/decorations/topper.jpeg'),
    new DesignElement('cookies', '../../../assets/img/create-cake/decorations/cookies.jpeg'),
    new DesignElement('balloons', '../../../assets/img/create-cake/decorations/balloons.jpeg'),
    new DesignElement('flare', '../../../assets/img/create-cake/decorations/flare.jpeg'),
    new DesignElement('flowers', '../../../assets/img/create-cake/decorations/flowers.jpeg'),
  ]

}
