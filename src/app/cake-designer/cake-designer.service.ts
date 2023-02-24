import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cake, Color, CountedDetails, Details, Flavour, Floor, FloorsColor, FloorsFlavour, Size, Type } from './desig-element.model';

@Injectable({
  providedIn: 'root'
})
export class CakeDesignerService {

  typeOfCake: Type = 'sugar';
  typeChanges = new Subject<Type>();

  sizeOfCake: Size = 'single';
  sizeChanges = new Subject<Size>();
  floorsOfCake: Floor[] = ['down'];

  flavoursOfCake: FloorsFlavour[] = [{floor: 'down', flavour: 'vanilla'}];
  flavourChanges = new Subject<FloorsFlavour[]>();

  colorsOfCake: FloorsColor[] = [{floor: 'down', color: 'white'}];
  colorChanges = new Subject<FloorsColor[]>();

  addedDetails: Details[] = [];
  detailsOfCake: CountedDetails[] = [];
  detailsChanges = new Subject<CountedDetails[]>();

  cake! : Cake;

  constructor() { }

  selectSize(size: Size) {
    this.sizeOfCake = size;
    this.sizeChanges.next(this.sizeOfCake);

    if(this.sizeOfCake === 'single')
    this.floorsOfCake = ['down']
    if(this.sizeOfCake === 'double')
    this.floorsOfCake = ['top', 'down']
    if(this.sizeOfCake === 'triple') 
    this.floorsOfCake = ['top', 'middle', 'down']

    this.flavoursOfCake = [];
    this.colorsOfCake = [];

    this.floorsOfCake.forEach(floor => {
      this.flavoursOfCake.push({floor: floor, flavour: 'vanilla'})
      this.colorsOfCake.push({floor: floor, color: 'white'})
    })
  }

  selectType(type: Type) {
    this.typeOfCake = type;
    this.typeChanges.next(this.typeOfCake);
  }

  selectFlavour(flavour: Flavour, floor: Floor) {
    this.flavoursOfCake.forEach(el => {
      el.floor === floor ? el.flavour = flavour : ''
    })
    this.flavourChanges.next(this.flavoursOfCake);
  }

  selectColor(color: Color, floor: Floor) {
    this.colorsOfCake.forEach(el => {
      el.floor === floor ? el.color = color : ''
    })
  }

  addDetailElement(detail: Details) {
    this.addedDetails.push(detail);
    this.detailsWithCount(this.addedDetails)
    this.detailsChanges.next(this.detailsOfCake)
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
    this.cake = new Cake(this.typeOfCake, this.colorsOfCake, this.sizeOfCake, this.flavoursOfCake, this.detailsOfCake);
  }
}
