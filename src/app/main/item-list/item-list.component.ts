import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from 'src/app/shared';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.fetchItemList();
  }

  private fetchItemList() {
    this.itemsService.getAllItems().subscribe(
      (data) => {
        this.items = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
