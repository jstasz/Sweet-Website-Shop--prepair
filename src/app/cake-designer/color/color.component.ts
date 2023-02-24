import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { Color, DesignColorElement, Floor, FloorsColor } from '../desig-element.model';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  colorOfCake: FloorsColor[] = [{floor: 'down', color: 'white'}];
  florsOfCake : Floor[] = [];

  cakeColors: DesignColorElement[] = [
    new DesignColorElement('white', '../../../assets/img/create-cake/color/white.jpeg'),
    new DesignColorElement('pink', '../../../assets/img/create-cake/color/pink.jpeg'),
    new DesignColorElement('blue', '../../../assets/img/create-cake/color/blue.jpeg'),
    new DesignColorElement('black', '../../../assets/img/create-cake/color/black.jpeg'),
    new DesignColorElement('green', '../../../assets/img/create-cake/color/green.jpeg'),
    new DesignColorElement('marmur', '../../../assets/img/create-cake/color/marmur.webp'),
    new DesignColorElement('violet', '../../../assets/img/create-cake/color/violet.jpeg'),
    new DesignColorElement('grey', '../../../assets/img/create-cake/color/grey.webp'),
  ]

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit(): void {
    this.onGetFloors()
    this.colorOfCake = this.cakeDesignerService.colorsOfCake
    this.cakeDesignerService.colorChanges.subscribe(color => this.colorOfCake = color);
  }

  onSelectColor(color: Color, floor: Floor) {
    this.cakeDesignerService.selectColor(color, floor)
  }

  onGetFloors() {
    this.florsOfCake = this.cakeDesignerService.floorsOfCake;
  }
}
