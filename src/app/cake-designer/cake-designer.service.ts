import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cake, Color, Details, Flavour, Size, Type } from './desig-element.model';

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

  detailsOfCake: {detail : Details, count: number}[] = [{detail : 'topper', count: 1}, ];

  cake! : Cake;

  constructor() { }

  selectType(type: Type) {
    this.typeOfCake = type;
    this.typeChanges.next(this.typeOfCake)
  }

  selectSize(size: Size) {
    this.sizeOfCake = size;
    this.sizeChanges.next(this.sizeOfCake)
  }

  selectFlavour(flavour: Flavour) {
    this.flavourOfCake = flavour;
    this.flavourChanges.next(this.flavourOfCake)
  }

  selectColor(color: Color) {
    this.colorOfCake = color;
    this.colorChanges.next(this.colorOfCake)
  }

  addDetailElement(det: Details) {

  }

  removeDetailElement(detail: Details) {

  }

  createCake() {
    this.cake = new Cake(this.typeOfCake, this.colorOfCake, this.sizeOfCake, this.flavourOfCake, this.detailsOfCake);
  }

}
