import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { DesignFlavourElement, Flavour } from '../desig-element.model';

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.scss']
})
export class FlavourComponent implements OnInit {

  flavourOfCake : Flavour = 'vanilla'; 

  cakeFlavours: DesignFlavourElement[] = [
    new DesignFlavourElement('vanilla', '../../../assets/img/create-cake/flavour/vanilla.webp'),
    new DesignFlavourElement('chocolate', '../../../assets/img/create-cake/flavour/chocolate.webp', 0),
    new DesignFlavourElement('rainbow', '../../../assets/img/create-cake/flavour/rainbow.jpeg', 9.99)
  ]

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit() {
    this.flavourOfCake = this.cakeDesignerService.flavourOfCake
    this.cakeDesignerService.flavourChanges.subscribe(flavour => this.flavourOfCake = flavour);
  }

  onSelectFlavour(flavour: Flavour) {
    this.cakeDesignerService.selectFlavour(flavour)
  }
}
