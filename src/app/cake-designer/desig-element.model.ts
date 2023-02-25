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

export type FloorsColor = {
    floor: Floor, 
    color: Color
};

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

export type FloorsFlavour = {
    floor: Floor, 
    flavour: Flavour
};

export class DesignDetailElement {
    constructor(public name: Details, public imagePath: string, public price: number = 0) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
    }
}

export type CountedDetails = {
    detail: Details,
    count: number
};

export class Cake {
    constructor(public type: Type, public color: FloorsColor[], public size: Size, public flavour: FloorsFlavour[], public details: CountedDetails[]) {
        this.type = type;
        this.color = color;
        this.size = size;
        this.flavour = flavour;
        this.details = details;
    }
}

export type CountAction = 'add' | 'remove';

export type Floor = 'top' | 'middle' | 'down';

export type Type = 'sugar' | 'creamy';
export type Color = 'pink' | 'blue' | 'white' | 'black' | 'green' | 'marmur'| 'violet' | 'grey';
export type Size = 'single' | 'double' | 'triple';
export type Flavour = 'vanilla' | 'chocolate' | 'rainbow';
export type Details = 'candles' | 'topper' | 'cookies' | 'balloons' | 'flare' | 'flowers' | 'sweets' | 'alcohol' | 'ganage' | 'sprinkles' | 'fruits' | 'lace' ;