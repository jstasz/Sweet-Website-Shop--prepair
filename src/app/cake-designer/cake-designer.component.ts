import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateCakeElement } from './desig-element.model';

@Component({
  selector: 'app-cake-designer',
  templateUrl: './cake-designer.component.html',
  styleUrls: ['./cake-designer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CakeDesignerComponent implements OnInit {

  createCakeInstruction: CreateCakeElement[] = [
    new CreateCakeElement('type', 'fa-solid fa-cake-candles'),
    new CreateCakeElement('size', 'fa-solid fa-scale-unbalanced'),
    new CreateCakeElement('flavour', 'fa-solid fa-cookie-bite'),
    new CreateCakeElement('color', 'fa-solid fa-brush'),
    new CreateCakeElement('details', 'fa-solid fa-star'),
    new CreateCakeElement('date', 'fa-solid fa-calendar-days'),
    new CreateCakeElement('summary', 'fa-solid fa-calendar-days')
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
