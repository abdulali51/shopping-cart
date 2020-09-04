import { Component, OnInit } from '@angular/core';
import { ItemsService, Item, ItemCategory } from 'src/app/shared';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: Item[] = [];
  filteredItems: Item[] = [];
  filterCategory: ItemCategory;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.fetchItemList();
  }

  private fetchItemList() {
    this.itemsService.getAllItems().subscribe(
      (data) => {
        this.items = data;
        this.filterItems();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  filterItems(category?: ItemCategory) {
    this.filterCategory = category;
    if (!this.filterCategory) {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter((item) => {
        return item.category.id === this.filterCategory.id;
      });
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
