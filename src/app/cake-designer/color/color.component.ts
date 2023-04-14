import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { DesignColorElement, Floor, FloorElements } from '../desig-element.model';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
})
export class ColorComponent implements OnInit {

  florsOfCake : FloorElements[] = [];


  cakeColors: DesignColorElement[] = [
    new DesignColorElement('white', '../../../assets/img/create-cake/color/white.jpeg'),
    new DesignColorElement('pink', '../../../assets/img/create-cake/color/pink.jpeg'),
    new DesignColorElement('blue', '../../../assets/img/create-cake/color/blue.jpeg'),
    new DesignColorElement('black', '../../../assets/img/create-cake/color/black.jpeg'),
    new DesignColorElement('green', '../../../assets/img/create-cake/color/green.jpeg'),
    new DesignColorElement('marmur', '../../../assets/img/create-cake/color/marmur.webp'),
    new DesignColorElement('violet', '../../../assets/img/create-cake/color/violet.jpeg'),
    new DesignColorElement('grey', '../../../assets/img/create-cake/color/grey.webp'),
  ];

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit(): void {
    this.onGetFloors();
  }

  onSelectColor(color: DesignColorElement, floor: Floor) {
    this.cakeDesignerService.selectColor(color, floor);
  }

  onGetFloors() {
    this.florsOfCake = this.cakeDesignerService.floorsOfCake;
  }
}
