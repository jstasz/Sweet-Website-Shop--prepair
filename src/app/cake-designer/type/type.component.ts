import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { DesignElement, Type } from '../desig-element.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  selectedType = false;
  typeOfCake!: string 

  cakeTypes: DesignElement[] = [
    new DesignElement('sugar', '../../../assets/img/create-cake/type/sugar.jpeg', 24.99),
    new DesignElement('creamy', '../../../assets/img/create-cake/type/creamy.jpeg', 20.99),
  ]

  constructor(private cakeDesignerService : CakeDesignerService) { }

  ngOnInit() {
    this.typeOfCake = this.cakeDesignerService.typeOfCake
    this.cakeDesignerService.typeChanges.subscribe(type => this.typeOfCake = type);
  }

  onSelectType(type: string) {
    this.cakeDesignerService.selectType(type)
  }

  onRemoveElement(element: DesignElement) {
    this.selectedType = false;
    this.typeOfCake = '';
  }
}
