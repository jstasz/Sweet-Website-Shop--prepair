export class CreateCakeElement {
    constructor(public elementName: string, public elementIcon: string) {
      this.elementName = elementName,
        this.elementIcon = elementIcon
    }
  }

export class DesignElement {
    constructor(public name: Type | Color | Size | Flavour | Details, public imagePath: string, public price: number = 0) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price
    }
}

export class Cake {
    constructor(public type: string, public color: string, public size: string, public flavour: string) {
        this.type = type;
        this.color = color;
        this.size = size;
        this.flavour = flavour
    }
}

export type Type = 'sugar' | 'creamy';
export type Color = 'pink' | 'blue' | 'white' | 'black' | 'green' | 'marmur';
export type Size = 'single' | 'double' | 'triple';
export type Flavour = 'vanilla' | 'chocolate' | 'rainbow';
export type Details = 'candles' | 'topper' | 'cookiese' | 'balloons' | 'flare' | 'flowers' | 'sweets' | 'alcohol' | 'ganage';