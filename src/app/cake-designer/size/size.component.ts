import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  selectedSize = false;
  sizeOfCake!: string

  cakeSize: DesignElement[] = [
    new DesignElement('single', '../../../assets/img/create-cake/size/single.webp'),
    new DesignElement('double', '../../../assets/img/create-cake/size/double.jpeg', 12.99),
    new DesignElement('triple', '../../../assets/img/create-cake/size/triple.jpeg', 22.99),
  ]

  constructor(private cakeDesignerService : CakeDesignerService) { }

  ngOnInit() {
    this.sizeOfCake = this.cakeDesignerService.sizeOfCake
    this.cakeDesignerService.sizeChanges.subscribe(size => this.sizeOfCake = size);
  }

  onSelectSize(size: string) {
    this.cakeDesignerService.selectSize(size)
  }

  onRemoveElement(element: DesignElement) {
    this.selectedSize = false;
    this.sizeOfCake = '';
  }
}
