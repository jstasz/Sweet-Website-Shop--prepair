export type Layout = 'grid' | 'list';
export type Sort = 'category' | 'name' | 'price';
export type Amount = 4 | 8 | 12;

export type Category = 'cookies' | 'cakes' | 'sweets'| 'balloons'| 'accessories' | 'drinks';

export class Categories {
  constructor(public name: Category, public icon: string) {
    this.name = name;
    this.icon = icon;
  }
}

export const shopCategories: Categories[] = [
  {name: 'cookies', icon: 'fa-cookie'},
  {name: 'cakes', icon: 'fa-cloud'},
  {name: 'sweets', icon: 'fa-ice-cream'},
  {name: 'balloons', icon: 'fa-golf-ball-tee'},
  {name: 'accessories', icon: 'fa-shapes'},
  {name: 'drinks', icon: 'fa-wine-glass-empty'}
]