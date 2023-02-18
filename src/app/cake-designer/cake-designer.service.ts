import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Type } from './desig-element.model';

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
}
