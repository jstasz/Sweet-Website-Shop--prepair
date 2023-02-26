import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { DesignFlavourElement, Floor, FloorElements } from '../desig-element.model';

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.scss']
})
export class FlavourComponent implements OnInit {

  florsOfCake : FloorElements[] = [];

  cakeFlavours: DesignFlavourElement[] = [
    new DesignFlavourElement('vanilla', '../../../assets/img/create-cake/flavour/vanilla.webp', 0),
    new DesignFlavourElement('chocolate', '../../../assets/img/create-cake/flavour/chocolate.webp', 0),
    new DesignFlavourElement('rainbow', '../../../assets/img/create-cake/flavour/rainbow.jpeg', 9.99)
  ]

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit() {
    this.onGetFloors();
  }

  onSelectFlavour(flavour: DesignFlavourElement, floor: Floor) {
    this.cakeDesignerService.selectFlavour(flavour, floor)
  }

  onGetFloors() {
    this.florsOfCake = this.cakeDesignerService.floorsOfCake;
  }
}
