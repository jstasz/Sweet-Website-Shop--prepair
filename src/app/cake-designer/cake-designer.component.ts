import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./cake-designer.component.scss']
})
export class CakeDesignerComponent implements OnInit {

  createCakeInstruction: CreateCakeElement[] = [
    new CreateCakeElement('type', 'fa-solid fa-cake-candles'),
    new CreateCakeElement('size', 'fa-solid fa-scale-unbalanced'),
    new CreateCakeElement('flavour', 'fa-solid fa-cookie-bite'),
    new CreateCakeElement('decoration', 'fa-solid fa-star'),
    new CreateCakeElement('date', 'fa-solid fa-calendar-days')

  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onChooseData(createCakeElement: CreateCakeElement) {
    const activeRoute = createCakeElement.elementName
    this.router.navigate([activeRoute], { relativeTo: this.route })
  }



}
