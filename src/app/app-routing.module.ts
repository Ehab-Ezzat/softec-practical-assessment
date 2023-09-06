import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'products', loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent)},
  {path: 'orders', loadComponent: () => import('./components/orders/orders.component').then(m => m.OrdersComponent)},
  {path: 'orders/:id', loadComponent: () => import('./components/order-details/order-details.component').then(m => m.OrderDetailsComponent)},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
