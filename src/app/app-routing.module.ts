import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: async () => (await import('./main/main.module')).MainModule,
  },
  {
    path: 'cart',
    loadChildren: async () => (await import('./cart/cart.module')).CartModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
