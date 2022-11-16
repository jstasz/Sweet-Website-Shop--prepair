import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake-designer.servis';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.scss']
})
export class FlavourComponent implements OnInit {

  selectedFlavour = false;
  flavourOfCake = this.cakeService.selectedFlavour


  cakeFlavours: DesignElement[] = [
    new DesignElement('vanilla', '../../../assets/img/create-cake/flavour/vanilla.webp'),
    new DesignElement('chocolate', '../../../assets/img/create-cake/flavour/chocolate.webp', 0),
    new DesignElement('rainbow', '../../../assets/img/create-cake/flavour/rainbow.jpeg', 9.99)
  ]

  constructor(private cakeService: CakeService) { }

  ngOnInit() {
  }

  onAddElement(element: DesignElement) {
    this.selectedFlavour = true;
    this.flavourOfCake = element.name
    this.cakeService.getFlavour(this.flavourOfCake)
  }

  onRemoveElement(element: DesignElement) {
    this.selectedFlavour = false;
    this.flavourOfCake = '';
  }

}
