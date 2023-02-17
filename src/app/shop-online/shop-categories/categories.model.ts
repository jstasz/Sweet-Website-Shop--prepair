export class Categories {
    constructor(public name: Category, public icon: string) {
      this.name = name;
      this.icon = icon;
    }
}

export type Category = 'cookies' | 'cakes' | 'birthday cakes' | 'sweets'| 'balloons'| 'accessories' | 'drinks';

export const productsCategories: Categories[] = [
  {name: 'cookies', icon: 'fa-cookie'},
  {name: 'cakes', icon: 'fa-cloud'},
  {name: 'birthday cakes', icon: 'fa-cake-candles'},
  {name: 'sweets', icon: 'fa-ice-cream'},
  {name: 'balloons', icon: 'fa-golf-ball-tee'},
  {name: 'accessories', icon: 'fa-shapes'},
  {name: 'drinks', icon: 'fa-wine-glass-empty'}
]