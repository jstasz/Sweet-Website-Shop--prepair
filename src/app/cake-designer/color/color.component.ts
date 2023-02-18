import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  selectedColor = false;
  colorOfCake! : string;

  cakeColors: DesignElement[] = [
    new DesignElement('pink', '../../../assets/img/create-cake/color/pink.jpeg'),
    new DesignElement('blue', '../../../assets/img/create-cake/color/blue.jpeg'),
    new DesignElement('white', '../../../assets/img/create-cake/color/white.jpeg'),
    new DesignElement('black', '../../../assets/img/create-cake/color/black.jpeg'),
    new DesignElement('green', '../../../assets/img/create-cake/color/green.jpeg'),
    new DesignElement('marmur', '../../../assets/img/create-cake/color/marmur.webp'),
  ]

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit(): void {
    this.colorOfCake = this.cakeDesignerService.colorOfCake
    this.cakeDesignerService.colorChanges.subscribe(color => this.colorOfCake = color);
  }

  onSelectColor(color: string) {
    this.cakeDesignerService.selectColor(color)
  }

  onRemoveElement(element: DesignElement) {
    this.selectedColor = false;
    this.colorOfCake = '';
  }

}
