export class DesignElement {
    constructor(public name: string, public imagePath: string, public price: number = 0) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price
    }
}