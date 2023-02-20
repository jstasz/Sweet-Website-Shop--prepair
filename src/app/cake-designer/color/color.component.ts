import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { Color, DesignColorElement } from '../desig-element.model';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  colorOfCake : Color = 'white';

  cakeColors: DesignColorElement[] = [
    new DesignColorElement('white', '../../../assets/img/create-cake/color/white.jpeg'),
    new DesignColorElement('pink', '../../../assets/img/create-cake/color/pink.jpeg'),
    new DesignColorElement('blue', '../../../assets/img/create-cake/color/blue.jpeg'),
    new DesignColorElement('black', '../../../assets/img/create-cake/color/black.jpeg'),
    new DesignColorElement('green', '../../../assets/img/create-cake/color/green.jpeg'),
    new DesignColorElement('marmur', '../../../assets/img/create-cake/color/marmur.webp'),
  ]

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit(): void {
    this.colorOfCake = this.cakeDesignerService.colorOfCake
    this.cakeDesignerService.colorChanges.subscribe(color => this.colorOfCake = color);
  }

  onSelectColor(color: Color) {
    this.cakeDesignerService.selectColor(color)
  }
}
