import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cake, Color, DesignDetailElement, DesignSizeElement, DesignTypeElement, Details, Flavour, Floor, FloorsColor, FloorsFlavour, Size, Type } from './desig-element.model';

@Injectable({
  providedIn: 'root'
})
export class CakeDesignerService {

  typeOfCake: DesignTypeElement = {name: 'sugar', imagePath: '../../../assets/img/create-cake/type/sugar.jpeg', price: 24.99};
  typeChanges = new Subject<DesignTypeElement>();

  sizeOfCake: DesignSizeElement = {name: 'single', imagePath: '../../../assets/img/create-cake/size/single.webp', price: 0};
  sizeChanges = new Subject<DesignSizeElement>();
  floorsOfCake: Floor[] = ['down'];

  flavoursOfCake: FloorsFlavour[] = [{floor: 'down', flavour: {name: 'vanilla', imagePath: '../../../assets/img/create-cake/flavour/vanilla.webp', price: 0}}];
  flavourChanges = new Subject<FloorsFlavour[]>();

  colorsOfCake: FloorsColor[] = [{floor: 'down', color: {name: 'white', imagePath: '../../../assets/img/create-cake/color/white.jpeg', price: 0}}];
  colorChanges = new Subject<FloorsColor[]>();

  detailsOfCake: DesignDetailElement[] = [];
  detailsChanges = new Subject<DesignDetailElement[]>();

  cake! : Cake;

  constructor() { }

  selectSize(size: DesignSizeElement) {
    this.sizeOfCake = size;
    this.sizeChanges.next(this.sizeOfCake);

    if(this.sizeOfCake.name === 'single')
    this.floorsOfCake = ['down']
    if(this.sizeOfCake.name === 'double')
    this.floorsOfCake = ['top', 'down']
    if(this.sizeOfCake.name === 'triple') 
    this.floorsOfCake = ['top', 'middle', 'down']

    this.flavoursOfCake = [];
    this.colorsOfCake = [];

    this.floorsOfCake.forEach(floor => {
      this.flavoursOfCake.push({floor: floor, flavour: {name: 'vanilla', imagePath: '../../../assets/img/create-cake/flavour/vanilla.webp', price: 0}})
      this.colorsOfCake.push({floor: floor, color: {name: 'white', imagePath: '../../../assets/img/create-cake/color/white.jpeg', price: 0}})
    })
  }

  selectType(type: DesignTypeElement) {
    this.typeOfCake = type;
    this.typeChanges.next(this.typeOfCake);
  }

  selectFlavour(flavour: Flavour, floor: Floor) {
    this.flavoursOfCake.forEach(el => {
      el.floor === floor ? el.flavour.name = flavour : ''
    })
    this.flavourChanges.next(this.flavoursOfCake);
  }

  selectColor(color: Color, floor: Floor) {
    this.colorsOfCake.forEach(el => {
      el.floor === floor ? el.color.name = color : ''
    })
  }

  selectDetail(detail: DesignDetailElement) {
    const cakeDetail = this.detailsOfCake.find(det => det.name === detail.name);

    if(!cakeDetail) {
      this.detailsOfCake.push(detail)
    } else {
      const index = this.detailsOfCake.indexOf(cakeDetail);
      this.detailsOfCake.splice(index, 1)
    }

    this.detailsChanges.next(this.detailsOfCake)
  }

  createCake() {
    this.cake = new Cake(this.typeOfCake, this.colorsOfCake, this.sizeOfCake, this.flavoursOfCake, this.detailsOfCake);
  }
}
