import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemCategory, ItemCategoryService } from 'src/app/shared';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss'],
})
export class ItemFilterComponent implements OnInit {
  categories: ItemCategory[];
  @Input() category: ItemCategory;
  @Output() selectedCategory: EventEmitter<any> = new EventEmitter();

  constructor(private itemCategoryService: ItemCategoryService) {}

  ngOnInit(): void {
    this.fetchItemCategories();
  }

  private fetchItemCategories() {
    this.itemCategoryService.getAllItemCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  selectCategory(category?: any) {
    this.selectedCategory.emit(category);
  }
}
