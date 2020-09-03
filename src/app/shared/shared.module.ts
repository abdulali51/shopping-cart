import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemCardComponent } from './components/item-card/item-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    ItemCardComponent
  ]
})
export class SharedModule { }
