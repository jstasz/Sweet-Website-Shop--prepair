import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { DesignSizeElement, Size } from '../desig-element.model';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  sizeOfCake!: DesignSizeElement;

  cakeSize: DesignSizeElement[] = [
    new DesignSizeElement('single', '../../../assets/img/create-cake/size/single.webp', 0),
    new DesignSizeElement('double', '../../../assets/img/create-cake/size/double.jpeg', 12.99),
    new DesignSizeElement('triple', '../../../assets/img/create-cake/size/triple.jpeg', 22.99),
  ]

  constructor(private cakeDesignerService : CakeDesignerService) { }

  ngOnInit() {
    this.sizeOfCake = this.cakeDesignerService.sizeOfCake
    this.cakeDesignerService.sizeChanges.subscribe(size => this.sizeOfCake = size);
  }

  onSelectSize(size: DesignSizeElement) {
    this.cakeDesignerService.selectSize(size)
  }
}
