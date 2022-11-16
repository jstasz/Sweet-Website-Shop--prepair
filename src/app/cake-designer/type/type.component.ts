import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CakeService } from '../cake-designer.servis';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  selectedType = false;
  typeOfCake = this.cakeService.selectedType


  cakeTypes: DesignElement[] = [
    new DesignElement('sugar', '../../../assets/img/create-cake/type/sugar.jpeg', 24.99),
    new DesignElement('creamy', '../../../assets/img/create-cake/type/creamy.jpeg', 20.99),
  ]

  constructor(private cakeService: CakeService) { }

  ngOnInit() {
  }

  onAddElement(element: DesignElement) {
    this.selectedType = true;
    this.typeOfCake = element.name;
    this.cakeService.getType(this.typeOfCake)
  }

  onRemoveElement(element: DesignElement) {
    this.selectedType = false;
    this.typeOfCake = '';
  }
}
