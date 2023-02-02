import { Category } from "../../shop-categories/categories.model";

export class ShopProduct {
    constructor(public id: number, public quantity: number = 1, public name: string, public description: string, public imagePath: string, public price: number, public category: Category) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
}