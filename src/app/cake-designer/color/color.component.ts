import { Component, OnInit } from '@angular/core';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  cakeColors: DesignElement[] = [
    new DesignElement('pink', '../../../assets/img/create-cake/color/pink.jpeg'),
    new DesignElement('blue', '../../../assets/img/create-cake/color/blue.jpeg'),
    new DesignElement('white', '../../../assets/img/create-cake/color/white.jpeg'),
    new DesignElement('black', '../../../assets/img/create-cake/color/black.jpeg'),
    new DesignElement('green', '../../../assets/img/create-cake/color/green.jpeg'),
    new DesignElement('marmur', '../../../assets/img/create-cake/color/marmur.webp'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
