import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { DesignTypeElement, Type} from '../desig-element.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  typeOfCake!: DesignTypeElement; 

  cakeTypes: DesignTypeElement[] = [
    new DesignTypeElement('sugar', '../../../assets/img/create-cake/type/sugar.jpeg', 24.99),
    new DesignTypeElement('creamy', '../../../assets/img/create-cake/type/creamy.jpeg', 20.99),
  ]

  constructor(private cakeDesignerService : CakeDesignerService) { }

  ngOnInit() {
    this.typeOfCake = this.cakeDesignerService.typeOfCake
    this.cakeDesignerService.typeChanges.subscribe(type => this.typeOfCake = type);
  }

  onSelectType(type: DesignTypeElement) {
    this.cakeDesignerService.selectType(type)
  }
}
