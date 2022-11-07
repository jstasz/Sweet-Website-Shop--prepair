import { Component, OnInit } from '@angular/core';

class CakeFlavour {
  constructor(public name: string, public image: string) {
    this.name = name;
    this.image = image;
  }
}

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.scss']
})
export class FlavourComponent implements OnInit {

  cakeFlavours: CakeFlavour[] = [
    new CakeFlavour('vanilla', '../../../assets/img/create-cake/flavour/vanilla.webp'),
    new CakeFlavour('chocolate', '../../../assets/img/create-cake/flavour/chocolate.webp'),
    new CakeFlavour('rainbow', '../../../assets/img/create-cake/flavour/rainbow.jpeg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
