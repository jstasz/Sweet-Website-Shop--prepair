import { Component, OnInit } from '@angular/core';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.scss']
})
export class FlavourComponent implements OnInit {

  cakeFlavours: DesignElement[] = [
    new DesignElement('vanilla', '../../../assets/img/create-cake/flavour/vanilla.webp'),
    new DesignElement('chocolate', '../../../assets/img/create-cake/flavour/chocolate.webp'),
    new DesignElement('rainbow', '../../../assets/img/create-cake/flavour/rainbow.jpeg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
