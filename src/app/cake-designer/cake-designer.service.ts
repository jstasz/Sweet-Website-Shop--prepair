import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cake, DesignColorElement, DesignCreamElement, DesignDetailElement, DesignFlavourElement, DesignSizeElement, DesignTypeElement, Floor, FloorElements} from './desig-element.model';

@Injectable({
  providedIn: 'root'
})
export class CakeDesignerService {

  startedSize: DesignSizeElement = {name: 'single', imagePath: '../../../assets/img/create-cake/size/single.webp', price: 0};
  startedType: DesignTypeElement = {name: 'sugar', imagePath: '../../../assets/img/create-cake/type/sugar.jpeg', price: 24.99};
  startedFlavour: DesignFlavourElement = {name: 'vanilla', imagePath: '../../../assets/img/create-cake/flavour/vanilla.webp', price: 0};
  startedCream: DesignCreamElement = {name: 'milk', imagePath: '../../../assets/img/create-cake/flavour/rainbow.jpeg', price: 0};
  startedColor: DesignColorElement = {name: 'white', imagePath: '../../../assets/img/create-cake/color/white.jpeg', price: 0};
  startedFloors: FloorElements = new FloorElements('down', this.startedFlavour, this.startedCream, this.startedColor);

  typeOfCake: DesignTypeElement = this.startedType;
  typeChanges = new Subject<DesignTypeElement>();

  sizeOfCake: DesignSizeElement = this.startedSize;
  sizeChanges = new Subject<DesignSizeElement>();

  floorsOfCake: FloorElements[] = [this.startedFloors];

  detailsOfCake: DesignDetailElement[] = [];
  detailsChanges = new Subject<DesignDetailElement[]>();

  cake! : Cake;
  cakeChange = new Subject<Cake>();

  totalCakePrice!: number;

  constructor() { }

  selectSize(size: DesignSizeElement) {
    this.sizeOfCake = size;
    this.sizeChanges.next(this.sizeOfCake);

    if(this.sizeOfCake.name === 'single')
    this.floorsOfCake = [
      new FloorElements('down', this.startedFlavour, this.startedCream, this.startedColor)];
    if(this.sizeOfCake.name === 'double')
    this.floorsOfCake = [
      new FloorElements('down', this.startedFlavour, this.startedCream, this.startedColor), 
      new FloorElements('middle', this.startedFlavour, this.startedCream, this.startedColor)];
    if(this.sizeOfCake.name === 'triple') 
    this.floorsOfCake = [
      new FloorElements('down', this.startedFlavour, this.startedCream, this.startedColor), 
      new FloorElements('middle', this.startedFlavour, this.startedCream, this.startedColor),
      new FloorElements('top', this.startedFlavour, this.startedCream, this.startedColor)
    ];
  }

  selectType(type: DesignTypeElement) {
    this.typeOfCake = type;
    this.typeChanges.next(this.typeOfCake);
  }

  selectFlavour(flavour: DesignFlavourElement, floor: Floor) {
    this.floorsOfCake.forEach(el => el.name === floor ? el.flavour = flavour : '');
  }

  selectCream(cream: DesignCreamElement, floor: Floor) {
    this.floorsOfCake.forEach(el => el.name === floor ? el.cream = cream : '');
  }

  selectColor(color: DesignColorElement, floor: Floor) {
    this.floorsOfCake.forEach(el => el.name === floor ? el.color = color : '');
  }

  selectDetail(detail: DesignDetailElement) {
    const cakeDetail = this.detailsOfCake.find(det => det.name === detail.name);

    if(!cakeDetail) {
      this.detailsOfCake.push(detail);
    } else {
      const index = this.detailsOfCake.indexOf(cakeDetail);
      this.detailsOfCake.splice(index, 1);
    }

    this.detailsChanges.next(this.detailsOfCake);
  }

  createCake() {
    this.cake = new Cake(this.typeOfCake, this.sizeOfCake, this.floorsOfCake, this.detailsOfCake);
    this.countTotalCakePrice(this.cake);
  }

  countTotalCakePrice(cake: Cake) {
    const detailsPrice: number = cake.details.reduce((sum, detail) => sum + detail.price, 0);
    const flavoursPrice: number = cake.floor.reduce((sum, detail) => sum + detail.flavour.price, 0);
    const creamPrice: number = cake.floor.reduce((sum, detail) => sum + detail.cream.price, 0);

    return this.totalCakePrice = Number((cake.type.price + cake.size.price + flavoursPrice + creamPrice + detailsPrice).toFixed(2));
  }

  clearSelectedElements() {
    this.typeOfCake = this.startedType;
    this.sizeOfCake = this.startedSize;
    this.floorsOfCake = [this.startedFloors];
    this.detailsOfCake = [];
  }
} 
