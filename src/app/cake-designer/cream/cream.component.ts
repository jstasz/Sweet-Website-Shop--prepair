import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { DesignCreamElement, Floor, FloorElements } from '../desig-element.model';

@Component({
  selector: 'app-cream',
  templateUrl: './cream.component.html',
})
export class CreamComponent implements OnInit {

  florsOfCake : FloorElements[] = [];

  cakeCreams: DesignCreamElement[] = [
    new DesignCreamElement('milk', '../../../assets/img/create-cake/cream/milk.webp', 0),
    new DesignCreamElement('vanilla', '../../../assets/img/create-cake/cream/vanilla.jpeg', 0),
    new DesignCreamElement('chocolate', '../../../assets/img/create-cake/cream/chocolate.webp', 4.99),
    new DesignCreamElement('strawberry', '../../../assets/img/create-cake/cream/strawberry.jpeg', 4.99),
    new DesignCreamElement('raspberry', '../../../assets/img/create-cake/cream/rasberry.webp', 4.99),
    new DesignCreamElement('oreo', '../../../assets/img/create-cake/cream/oreo.webp', 6.99),
    new DesignCreamElement('ferrero', '../../../assets/img/create-cake/cream/ferrero.jpeg', 6.99),
    new DesignCreamElement('rafaello', '../../../assets/img/create-cake/cream/rafaello.webp', 6.99)
  ];

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit() {
    this.onGetFloors();
  }

  onSelectCream(cream: DesignCreamElement, floor: Floor) {
    this.cakeDesignerService.selectCream(cream, floor);
  }

  onGetFloors() {
    this.florsOfCake = this.cakeDesignerService.floorsOfCake;
  }

}
