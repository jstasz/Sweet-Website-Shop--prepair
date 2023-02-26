import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cake, DesignColorElement, DesignCreamElement, DesignDetailElement, DesignFlavourElement, DesignSizeElement, DesignTypeElement, Floor, FloorElements} from './desig-element.model';

@Injectable({
  providedIn: 'root'
})
export class CakeDesignerService {

  typeOfCake: DesignTypeElement = {name: 'sugar', imagePath: '../../../assets/img/create-cake/type/sugar.jpeg', price: 24.99};
  typeChanges = new Subject<DesignTypeElement>();

  sizeOfCake: DesignSizeElement = {name: 'single', imagePath: '../../../assets/img/create-cake/size/single.webp', price: 0};
  sizeChanges = new Subject<DesignSizeElement>();

  floorsOfCake: FloorElements[] = [new FloorElements('down', {name: 'vanilla', imagePath: '../../../assets/img/create-cake/flavour/vanilla.webp', price: 0}, {name: 'milk', imagePath: '../../../assets/img/create-cake/flavour/rainbow.jpeg', price: 0}, {name: 'white', imagePath: '../../../assets/img/create-cake/color/white.jpeg', price: 0})];

  detailsOfCake: DesignDetailElement[] = [];
  detailsChanges = new Subject<DesignDetailElement[]>();

  cake! : Cake;
  totalCakePrice!: number;

  constructor() { }

  selectSize(size: DesignSizeElement) {
    this.sizeOfCake = size;
    this.sizeChanges.next(this.sizeOfCake);

    if(this.sizeOfCake.name === 'single')
    this.floorsOfCake = [new FloorElements('down', {name: 'vanilla', imagePath: '../../../assets/img/create-cake/flavour/vanilla.webp', price: 0}, {name: 'milk', imagePath: '../../../assets/img/create-cake/flavour/rainbow.jpeg', price: 0} ,{name: 'white', imagePath: '../../../assets/img/create-cake/color/white.jpeg', price: 0})]
    if(this.sizeOfCake.name === 'double')
    this.floorsOfCake = [
      new FloorElements('down', {name: 'vanilla', imagePath: '../../../assets/img/create-cake/flavour/vanilla.webp', price: 0}, {name: 'milk', imagePath: '../../../assets/img/create-cake/flavour/rainbow.jpeg', price: 0},{name: 'white', imagePath: '../../../assets/img/create-cake/color/white.jpeg', price: 0}), 
      new FloorElements('middle', {name: 'vanilla', imagePath: '../../../assets/img/create-cake/flavour/vanilla.webp', price: 0}, {name: 'milk', imagePath: '../../../assets/img/create-cake/flavour/rainbow.jpeg', price: 0},{name: 'white', imagePath: '../../../assets/img/create-cake/color/white.jpeg', price: 0})]
    if(this.sizeOfCake.name === 'triple') 
    this.floorsOfCake = [
      new FloorElements('down', {name: 'vanilla', imagePath: '../../../assets/img/create-cake/flavour/vanilla.webp', price: 0}, {name: 'milk', imagePath: '../../../assets/img/create-cake/flavour/rainbow.jpeg', price: 0},{name: 'white', imagePath: '../../../assets/img/create-cake/color/white.jpeg', price: 0}), 
      new FloorElements('middle', {name: 'vanilla', imagePath: '../../../assets/img/create-cake/flavour/vanilla.webp', price: 0}, {name: 'milk', imagePath: '../../../assets/img/create-cake/flavour/rainbow.jpeg', price: 0},{name: 'white', imagePath: '../../../assets/img/create-cake/color/white.jpeg', price: 0}),
      new FloorElements('top', {name: 'vanilla', imagePath: '../../../assets/img/create-cake/flavour/vanilla.webp', price: 0}, {name: 'milk', imagePath: '../../../assets/img/create-cake/flavour/rainbow.jpeg', price: 0},{name: 'white', imagePath: '../../../assets/img/create-cake/color/white.jpeg', price: 0})
    ]
  }

  selectType(type: DesignTypeElement) {
    this.typeOfCake = type;
    this.typeChanges.next(this.typeOfCake);
  }

  selectFlavour(flavour: DesignFlavourElement, floor: Floor) {
    this.floorsOfCake.forEach(el => el.name === floor ? el.flavour = flavour : '')
  }

  selectCream(cream: DesignCreamElement, floor: Floor) {
    this.floorsOfCake.forEach(el => el.name === floor ? el.cream = cream : '')
  }

  selectColor(color: DesignColorElement, floor: Floor) {
    this.floorsOfCake.forEach(el => el.name === floor ? el.color = color : '')
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
    this.cake = new Cake(this.typeOfCake, this.sizeOfCake, this.floorsOfCake, this.detailsOfCake);
    this.countTotalCakePrice(this.cake);
  }

  countTotalCakePrice(cake: Cake) {
    const detailsPrice: number = cake.details.reduce((sum, detail) => sum + detail.price, 0);
    const flavoursPrice: number = cake.floor.reduce((sum, detail) => sum + detail.flavour.price, 0);
    const creamPrice: number = cake.floor.reduce((sum, detail) => sum + detail.cream.price, 0)

    return this.totalCakePrice = Number((cake.type.price + cake.size.price + flavoursPrice + creamPrice + detailsPrice).toFixed(2));
  }
} 
