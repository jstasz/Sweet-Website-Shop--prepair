import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreateCakeElement } from './desig-element.model';
import { CakeService } from './cake-designer.servis';

@Component({
  selector: 'app-cake-designer',
  templateUrl: './cake-designer.component.html',
  styleUrls: ['./cake-designer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CakeService]
})
export class CakeDesignerComponent implements OnInit {

  createCakeInstruction: CreateCakeElement[] = [
    new CreateCakeElement('type', 'fa-solid fa-cake-candles'),
    new CreateCakeElement('size', 'fa-solid fa-scale-unbalanced'),
    new CreateCakeElement('flavour', 'fa-solid fa-cookie-bite'),
    new CreateCakeElement('color', 'fa-solid fa-brush'),
    new CreateCakeElement('details', 'fa-solid fa-star'),
    new CreateCakeElement('date', 'fa-solid fa-calendar-days')
  ]

  constructor(private router: Router, private route: ActivatedRoute, private cakeService: CakeService) {
  }

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
