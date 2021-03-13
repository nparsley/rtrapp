import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { BurgersComponent } from './food/burgers/burgers.component';
import { PizzaComponent } from './food/pizza/pizza.component';
import { SidesComponent } from './food/sides/sides.component';

const routes: Routes = [
  { path: 'pizza', component: PizzaComponent},
  { path: 'burgers', component: BurgersComponent},
  { path: 'sides', component: SidesComponent},
  { path: 'sides/:sideId', component: SidesComponent },
  { path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenets = [PizzaComponent, BurgersComponent, SidesComponent, CartComponent]
