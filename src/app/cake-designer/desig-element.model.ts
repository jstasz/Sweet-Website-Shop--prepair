export class CreateCakeElement {
    constructor(public elementName: string, public elementIcon: string) {
        this.elementName = elementName,
            this.elementIcon = elementIcon
    }
}

export class DesignElement {
    constructor(public name: string, public imagePath: string, public price: number = 0) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price
    }
}

export class Cake {
    constructor(public type: string, public size: string, public flavour: string, public color: string, public details: string[]) {
        this.type = type;
        this.size = size;
        this.flavour = flavour;
        this.color = color;
        this.details = details
    }
}