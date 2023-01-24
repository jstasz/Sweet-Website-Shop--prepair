export class ShopProduct {
    constructor(public name: string, public description: string, public imagePath: string, public price: number, ) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.price = price
    }
}