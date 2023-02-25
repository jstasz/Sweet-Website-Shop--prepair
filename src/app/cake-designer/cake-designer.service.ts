import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cake, Color, CountAction, CountedDetails, Details, Flavour, Floor, FloorsColor, FloorsFlavour, Size, Type } from './desig-element.model';

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

  detailElementCount(detail: Details, action: CountAction) {
    const cakeDetail = this.detailsOfCake.find((det) => det.detail === detail);

    if (cakeDetail) {
      action === 'add' ? cakeDetail.count++ : cakeDetail.count--;
    } else {
      this.detailsOfCake.push({ detail: detail, count: 1 });
    }

    this.removeDetail()
  }

  removeDetail() {
    const cakeDetail = this.detailsOfCake.find((det) => det.count < 1);
    
    if (cakeDetail) {
      const index = this.detailsOfCake.indexOf(cakeDetail);
      this.detailsOfCake.splice(index, 1)
    }
  }

  createCake() {
    this.cake = new Cake(this.typeOfCake, this.colorsOfCake, this.sizeOfCake, this.flavoursOfCake, this.detailsOfCake);
  }
}
