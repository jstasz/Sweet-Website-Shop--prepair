import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cake, Color, CountedDetails, Details, Flavour, Size, Type } from './desig-element.model';

@Injectable({
  providedIn: 'root'
})
export class CakeDesignerService {

  typeOfCake: Type = 'sugar';
  typeChanges = new Subject<Type>();

  sizeOfCake: Size = 'single';
  sizeChanges = new Subject<Size>();

  flavourOfCake: Flavour = 'vanilla';
  flavourChanges = new Subject<Flavour>();

  colorOfCake: Color = 'white';
  colorChanges = new Subject<Color>();

  addedDetails: Details[] = [];
  detailsOfCake: CountedDetails[] = [];

  cake! : Cake;

  constructor() { }

  selectType(type: Type) {
    this.typeOfCake = type;
    this.typeChanges.next(this.typeOfCake);
  }

  selectSize(size: Size) {
    this.sizeOfCake = size;
    this.sizeChanges.next(this.sizeOfCake);
  }

  selectFlavour(flavour: Flavour) {
    this.flavourOfCake = flavour;
    this.flavourChanges.next(this.flavourOfCake);
  }

  selectColor(color: Color) {
    this.colorOfCake = color;
    this.colorChanges.next(this.colorOfCake);
  }

  addDetailElement(detail: Details) {
    this.addedDetails.push(detail);
    this.detailsWithCount(this.addedDetails)
  }

  detailsWithCount(tab: Details[]) {
    const details: Record<string, number> = {};
    tab.forEach(item => {
      details[item] = details[item] ? details[item] + 1 : 1;
    });

    const detailsOfCake: CountedDetails[] = [];
    Object.keys(details).forEach(key => {
      detailsOfCake.push({ detail: key, count: details[key]});
    });
    
    return this.detailsOfCake = detailsOfCake;
  }

  removeDetailElement(detail: Details) {
    const index = this.addedDetails.indexOf(detail);
    this.addedDetails.splice(index, 1);
  }

  createCake() {
    this.cake = new Cake(this.typeOfCake, this.colorOfCake, this.sizeOfCake, this.flavourOfCake, this.detailsOfCake);
  }
}
