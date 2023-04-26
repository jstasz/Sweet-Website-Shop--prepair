export class ProductsCard {

    constructor(public title: string, public description: string, public link: string, public imagePath: string,) {
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
        this.link = link
    }
}