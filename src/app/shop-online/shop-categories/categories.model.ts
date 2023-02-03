export class Categories {
    constructor(public name: Category, public icon: string) {
      this.name = name;
      this.icon = icon
    }
}

export type Category = 'cookies' | 'cakes' | 'birthday cakes'| 'sweets'| 'balloons'| 'accessories' | 'drinks'