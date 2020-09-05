import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() item: Item;
  isItemInCart: boolean;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.checkItemInCart();
  }

  addToCart(item: Item) {
    this.cartService.addItem(item);
    this.checkItemInCart();
  }

  removeFromCart(item: Item) {
    this.cartService.removeItem(item);
    this.checkItemInCart();
  }

  checkItemInCart() {
    this.isItemInCart = this.cartService.checkItemInCart(this.item.id);
  }

  getItemQuantity(item: Item) {
    return this.cartService.getItemQuantity(this.item.id);
  }
}
