import { Component, OnInit } from '@angular/core';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  selectedType = false;
  typeOfCake = ''

  cakeTypes: DesignElement[] = [
    new DesignElement('sugar', '../../../assets/img/create-cake/type/sugar.jpeg', 24.99),
    new DesignElement('creamy', '../../../assets/img/create-cake/type/creamy.jpeg', 20.99),
  ]

  constructor() { }

  ngOnInit() {
  }

  onAddElement(element: DesignElement) {
    this.selectedType = true;
    this.typeOfCake = element.name
    console.log(`selected type: ${this.typeOfCake}`)
  }

  onRemoveElement(element: DesignElement) {
    this.selectedType = false;
    this.typeOfCake = '';
  }
}
