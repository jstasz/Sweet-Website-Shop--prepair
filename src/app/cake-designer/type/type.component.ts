import { Component, OnInit } from '@angular/core';
import { DesignElement } from '../desig-element.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  cakeTypes: DesignElement[] = [
    new DesignElement('sugar', '../../../assets/img/create-cake/type/sugar.jpeg'),
    new DesignElement('creamy', '../../../assets/img/create-cake/type/creamy.jpeg'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
