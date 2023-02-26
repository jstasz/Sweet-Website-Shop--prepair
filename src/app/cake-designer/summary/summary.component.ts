import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { Cake } from '../desig-element.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  createdCake!: Cake;
  totalCakePrice!: number;

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit(): void {
    this.onCreateNewCake();
    this.getCake();
  }

  onCreateNewCake() {
    this.cakeDesignerService.createCake();
  }

  getCake() {
    this.createdCake = this.cakeDesignerService.cake;
    this.totalCakePrice = this.cakeDesignerService.totalCakePrice;
  }
}
