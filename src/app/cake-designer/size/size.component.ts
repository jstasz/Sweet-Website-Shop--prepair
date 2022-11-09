import { Component, OnInit } from '@angular/core';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  cakeSize: DesignElement[] = [
    new DesignElement('single', '../../../assets/img/create-cake/size/single.jpeg'),
    new DesignElement('double', '../../../assets/img/create-cake/size/double.jpeg'),
    new DesignElement('triple', '../../../assets/img/create-cake/size/triple.jpeg'),
    new DesignElement('triple', '../../../assets/img/create-cake/size/triple.jpeg'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
