import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { ItemFilterComponent } from './item-filter/item-filter.component';

const routes: Routes = [
  {
    path: '',
    component: ItemListComponent,
  }
];

@NgModule({
  declarations: [ItemListComponent, ItemFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class MainModule { }
