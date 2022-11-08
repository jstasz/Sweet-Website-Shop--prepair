import { Component, OnInit } from '@angular/core';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  cakeColors: DesignElement[] = [
    new DesignElement('pink', '../../../assets/img/create-cake/colour/pink.png'),
    new DesignElement('grey', '../../../assets/img/create-cake/colour/grey.png'),
    new DesignElement('yellow', '../../../assets/img/create-cake/colour/yellow.png'),
    new DesignElement('blue', '../../../assets/img/create-cake/colour/blue.png'),
    new DesignElement('white', '../../../assets/img/create-cake/colour/white.png'),
    new DesignElement('violet', '../../../assets/img/create-cake/colour/violet.png'),
    new DesignElement('black', '../../../assets/img/create-cake/colour/black.png'),
    new DesignElement('green', '../../../assets/img/create-cake/colour/green.png'),
    new DesignElement('marmur', '../../../assets/img/create-cake/colour/marmur.jpeg'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
