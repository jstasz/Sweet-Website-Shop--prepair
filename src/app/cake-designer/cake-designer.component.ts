import { Component, OnInit } from '@angular/core';

class CreateCakeElement {
  constructor(public elementName: string, public elementIcon: string) {
    this.elementName = elementName,
      this.elementIcon = elementIcon
  }
}

@Component({
  selector: 'app-cake-designer',
  templateUrl: './cake-designer.component.html',
  styleUrls: ['./cake-designer.component.scss']
})
export class CakeDesignerComponent implements OnInit {

  createCakeInstruction: CreateCakeElement[] = [
    new CreateCakeElement('type', 'fa-solid fa-cake-candles'),
    new CreateCakeElement('size', 'fa-solid fa-scale-unbalanced'),
    new CreateCakeElement('flavour', 'fa-solid fa-cookie-bite'),
    new CreateCakeElement('date', 'fa-solid fa-calendar-days')

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
