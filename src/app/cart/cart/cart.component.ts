import { Component, OnInit } from '@angular/core';
import { CartService, CartItem, Item } from 'src/app/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart$ = this.cartService.shoppingCart;
  }

  addItem(item: Item) {
    this.cartService.addItem(item);
  }

  removeItem(item: Item) {
    this.cartService.removeItem(item);
  }

  getTotalPrice() {
    return this.cartService.getTotalCartPrice();
  }

  emptyCart() {
    this.cartService.removeAllCartItems();
  }
}
