import { ItemCategory } from './category';

export interface Item {
  id: number;
  name: string;
  price: number;
  category: ItemCategory;
  imageUrl: string;
}
