export class Categories {
    constructor(public name: Category, public icon: string) {
      this.name = name;
      this.icon = icon;
    }
}

export type Category = 'cookies' | 'cakes' | 'sweets'| 'balloons'| 'accessories' | 'drinks';

export const productsCategories: Categories[] = [
  {name: 'cookies', icon: 'fa-cookie'},
  {name: 'cakes', icon: 'fa-cloud'},
  {name: 'sweets', icon: 'fa-ice-cream'},
  {name: 'balloons', icon: 'fa-golf-ball-tee'},
  {name: 'accessories', icon: 'fa-shapes'},
  {name: 'drinks', icon: 'fa-wine-glass-empty'}
]