import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Item[] = [];

  constructor() { }

  addItemToCart(item: Item) {
    this.cartItems.push(item);
  }
}
