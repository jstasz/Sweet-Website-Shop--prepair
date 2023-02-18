import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.scss']
})
export class FlavourComponent implements OnInit {

  selectedFlavour = false;
  flavourOfCake! : string; 

  cakeFlavours: DesignElement[] = [
    new DesignElement('vanilla', '../../../assets/img/create-cake/flavour/vanilla.webp'),
    new DesignElement('chocolate', '../../../assets/img/create-cake/flavour/chocolate.webp', 0),
    new DesignElement('rainbow', '../../../assets/img/create-cake/flavour/rainbow.jpeg', 9.99)
  ]

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit() {
    this.flavourOfCake = this.cakeDesignerService.flavourOfCake
    this.cakeDesignerService.flavourChanges.subscribe(flavour => this.flavourOfCake = flavour);
  }

  onSelectFlavour(flavour: string) {
    this.cakeDesignerService.selectFlavour(flavour)
  }

  onRemoveElement(element: DesignElement) {
    this.selectedFlavour = false;
    this.flavourOfCake = '';
  }
}
