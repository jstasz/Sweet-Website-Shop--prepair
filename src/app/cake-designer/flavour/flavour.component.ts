import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { DesignFlavourElement, Flavour, Floor, FloorsFlavour } from '../desig-element.model';

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.scss']
})
export class FlavourComponent implements OnInit {

  flavourOfCake: FloorsFlavour[] = [];
  florsOfCake : Floor[] = [];

  cakeFlavours: DesignFlavourElement[] = [
    new DesignFlavourElement('vanilla', '../../../assets/img/create-cake/flavour/vanilla.webp', 0),
    new DesignFlavourElement('chocolate', '../../../assets/img/create-cake/flavour/chocolate.webp', 0),
    new DesignFlavourElement('rainbow', '../../../assets/img/create-cake/flavour/rainbow.jpeg', 9.99)
  ]

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit() {
    this.onGetFloors();
    this.flavourOfCake = this.cakeDesignerService.flavoursOfCake;
    this.cakeDesignerService.flavourChanges.subscribe(flavour => this.flavourOfCake = flavour);
  }

  onSelectFlavour(flavour: Flavour, floor: Floor) {
    this.cakeDesignerService.selectFlavour(flavour, floor)
  }

  onGetFloors() {
    this.florsOfCake = this.cakeDesignerService.floorsOfCake;
  }
}
