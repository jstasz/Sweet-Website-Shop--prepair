export class CreateCakeElement {
    constructor(public elementName: string, public elementIcon: string) {
      this.elementName = elementName,
        this.elementIcon = elementIcon
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
    constructor(public name: Size, public imagePath: string, public price: number = 0,) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
    }
}

export class FloorElements {
    constructor(public name: Floor, public flavour: DesignFlavourElement, public color: DesignColorElement) {
        this.name = name;
        this.flavour = flavour;
        this.color = color;
    }
}

export class DesignFlavourElement {
    constructor(public name: Flavour, public imagePath: string, public price: number = 0) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
    }
}

export class DesignColorElement {
    constructor(public name: Color, public imagePath: string, public price: number = 0) {
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
    constructor(public type: DesignTypeElement, public size: DesignSizeElement, public floor: FloorElements[], public details: DesignDetailElement[]) {
        this.type = type;
        this.size = size;
        this.floor = floor;
        this.details = details;
    }
}

export type Floor = 'top' | 'middle' | 'down';

export type Type = 'sugar' | 'creamy';
export type Color = 'pink' | 'blue' | 'white' | 'black' | 'green' | 'marmur'| 'violet' | 'grey';
export type Size = 'single' | 'double' | 'triple';
export type Flavour = 'vanilla' | 'chocolate' | 'rainbow';
export type Details = 'candles' | 'topper' | 'cookies' | 'balloons' | 'flare' | 'flowers' | 'sweets' | 'alcohol' | 'ganage' | 'sprinkles' | 'fruits' | 'lace' ;