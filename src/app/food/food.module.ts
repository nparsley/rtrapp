import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgersComponent } from './burgers/burgers.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SidesComponent } from './sides/sides.component';




@NgModule({
  declarations: [
    BurgersComponent,
    PizzaComponent,
    SidesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BurgersComponent,
    PizzaComponent,
    SidesComponent
  ]
})
export class FoodModule { }
