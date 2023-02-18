import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cake, Type } from './desig-element.model';

@Injectable({
  providedIn: 'root'
})
export class CakeDesignerService {

  typeOfCake!: string;
  typeChanges = new Subject<string>();

  sizeOfCake!: string;
  sizeChanges = new Subject<string>();

  flavourOfCake!: string;
  flavourChanges = new Subject<string>();

  colorOfCake!: string;
  colorChanges = new Subject<string>();

  Cake!: Cake

  constructor() { }

  selectType(type: string) {
    this.typeOfCake = type;
    this.typeChanges.next(this.typeOfCake)
  }

  selectSize(size: string) {
    this.sizeOfCake = size;
    this.sizeChanges.next(this.sizeOfCake)
  }

  selectFlavour(flavour: string) {
    this.flavourOfCake = flavour;
    this.flavourChanges.next(this.flavourOfCake)
  }

  selectColor(color: string) {
    this.colorOfCake = color;
    this.colorChanges.next(this.colorOfCake)
  }

  createdCake() {
    this.Cake = new Cake(this.typeOfCake, this.colorOfCake, this.sizeOfCake, this.flavourOfCake)
    console.log(this.Cake)
  }

}
