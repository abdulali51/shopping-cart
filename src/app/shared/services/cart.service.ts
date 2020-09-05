import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { CartItem } from '../models/cart-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  cartItems$ = new BehaviorSubject<CartItem[]>(this.cartItems);
  shoppingCart = this.cartItems$.asObservable();

  constructor() {}

  private getCartItem(itemId: number): CartItem {
    return this.cartItems.find(({ id }) => id === itemId);
  }

  private createCartItem(item: Item): CartItem {
    return { ...item, quantity: 1 };
  }

  addItem(item: Item) {
    const cartItem = this.createCartItem(item);
    this.addItemToCart(cartItem);
  }

  addItemToCart(item: CartItem) {
    const isItemInCart = this.getCartItem(item.id);
    if (isItemInCart) {
      isItemInCart.quantity += 1;
      return;
    }
    this.cartItems.push(item);
    this.cartItems$.next(this.cartItems);
  }

  removeItem(item: Item) {
    const cartItem = this.createCartItem(item);
    this.removeItemFromCart(cartItem);
  }

  removeItemFromCart(item: CartItem) {
    const isItemInCart = this.getCartItem(item.id);
    if (isItemInCart) {
      isItemInCart.quantity -= 1;
      if (isItemInCart.quantity < 1) {
        this.cartItems.map((ci, index) => {
          if (ci.id === item.id) {
            this.cartItems.splice(index, 1);
          }
        });
      }
      this.cartItems$.next(this.cartItems);
    }
  }

  checkItemInCart(itemId: number): boolean {
    return this.cartItems.some((i) => i.id === itemId);
  }

  getItemQuantity(itemId: number): number {
    const cartItem = this.getCartItem(itemId);
    return cartItem.quantity;
  }

  getTotalCartItems(): number {
    return this.cartItems.reduce((acc, pr) => (acc += pr.quantity), 0);
  }

  getTotalCartPrice(): number {
    return this.cartItems.reduce((acc, pr) => (acc += (pr.quantity * pr.price)), 0);
  }

  removeAllCartItems() {
    this.cartItems = [];
    this.cartItems$.next(this.cartItems);
  }
}
