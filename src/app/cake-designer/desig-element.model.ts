export class CreateCakeElement {
    constructor(public elementName: string, public elementIcon: string) {
      this.elementName = elementName,
        this.elementIcon = elementIcon
    }
  }

export class DesignColorElement {
    constructor(public name: Color, public imagePath: string, public price: number = 0) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
    }
}

export class DesignTypeElement {
    constructor(public name: Type, public imagePath: string, public price: number = 0) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
    }
}

export class DesignSizeElement {
    constructor(public name: Size, public imagePath: string, public price: number = 0) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
    }
}

export class DesignFlavourElement {
    constructor(public name: Flavour, public imagePath: string, public price: number = 0) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
    }
}

export class DesignDetailElement {
    constructor(public name: Details, public imagePath: string, public price: number = 0) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
    }
}

export class Cake {
    constructor(public type: Type, public color: Color, public size: Size, public flavour: Flavour, public details: {detail : Details, count: number}[]) {
        this.type = type;
        this.color = color;
        this.size = size;
        this.flavour = flavour;
        this.details = details;
    }
}

export type Type = 'sugar' | 'creamy';
export type Color = 'pink' | 'blue' | 'white' | 'black' | 'green' | 'marmur';
export type Size = 'single' | 'double' | 'triple';
export type Flavour = 'vanilla' | 'chocolate' | 'rainbow';
export type Details = 'candles' | 'topper' | 'cookies' | 'balloons' | 'flare' | 'flowers' | 'sweets' | 'alcohol' | 'ganage';