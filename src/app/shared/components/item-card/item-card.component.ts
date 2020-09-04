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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(item: Item) {
    this.cartService.addItemToCart(item);
  }

}
