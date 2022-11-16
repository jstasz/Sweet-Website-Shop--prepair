import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake-designer.servis';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  selectedSize = false;
  sizeOfCake = this.cakeService.selectedSize


  cakeSize: DesignElement[] = [
    new DesignElement('single', '../../../assets/img/create-cake/size/single.webp'),
    new DesignElement('double', '../../../assets/img/create-cake/size/double.jpeg', 12.99),
    new DesignElement('triple', '../../../assets/img/create-cake/size/triple.jpeg', 22.99),
  ]

  constructor(private cakeService: CakeService) { }

  ngOnInit() {
  }

  onAddElement(element: DesignElement) {
    this.selectedSize = true;
    this.sizeOfCake = element.name
    this.cakeService.getSize(this.sizeOfCake)
  }

  onRemoveElement(element: DesignElement) {
    this.selectedSize = false;
    this.sizeOfCake = '';
  }


}
