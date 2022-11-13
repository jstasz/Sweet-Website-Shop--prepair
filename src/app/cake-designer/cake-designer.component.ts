import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

class CreateCakeElement {
  constructor(public elementName: string, public elementIcon: string) {
    this.elementName = elementName,
      this.elementIcon = elementIcon
  }
}

@Component({
  selector: 'app-cake-designer',
  templateUrl: './cake-designer.component.html',
  styleUrls: ['./cake-designer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CakeDesignerComponent implements OnInit {

  previousPage = false;

  createCakeInstruction: CreateCakeElement[] = [
    new CreateCakeElement('type', 'fa-solid fa-cake-candles'),
    new CreateCakeElement('size', 'fa-solid fa-scale-unbalanced'),
    new CreateCakeElement('flavour', 'fa-solid fa-cookie-bite'),
    new CreateCakeElement('color', 'fa-solid fa-brush'),
    new CreateCakeElement('details', 'fa-solid fa-star'),
    new CreateCakeElement('date', 'fa-solid fa-calendar-days')
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  onNextElement(side: 1 | -1) {
    const namePath: string = this.route.snapshot.children[0].routeConfig?.path!
    this.createCakeInstruction.forEach(element => {

      if (element.elementName !== namePath)
        return;

      const currentElement = this.createCakeInstruction.indexOf(element)
      const nextPath = this.createCakeInstruction[currentElement + side]?.elementName
      nextPath ? this.router.navigate([nextPath], { relativeTo: this.route }) : ""
    })
  }
}
