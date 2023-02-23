import { Component, OnInit, Type } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';
import { Cake, CountedDetails, Details, Flavour, Floor, FloorsColor, FloorsFlavour } from '../desig-element.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  createdCake!: Cake;
  detailsOfCake: CountedDetails[] = [];
  flavoursOfCake: FloorsFlavour[] = [];
  colorsOfCake: FloorsColor[] = [];

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit(): void {
    this.onCreateNewCake();
    this.getCake();
    this.getDetails();
    this.getFlavours();
    this.getColors();
  }

  onCreateNewCake() {
    this.cakeDesignerService.createCake();
  }

  getCake() {
    this.createdCake = this.cakeDesignerService.cake;
  }

  getDetails() {
    this.detailsOfCake = this.cakeDesignerService.detailsOfCake;
  }

  getFlavours() {
    this.flavoursOfCake = this.cakeDesignerService.flavoursOfCake;
  }

  getColors() {
    this.colorsOfCake = this.cakeDesignerService.colorsOfCake;
  }

}
