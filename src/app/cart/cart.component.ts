import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  msg: string;

  margheritaPizza = {
    name: 'margherita',
    description: 'tomatoes, mozzarella, and fresh basil',
    price: 13
  }

  pepperoniPizza = {
    name: 'pepperoni',
    description: 'pepperoni, mozzarella, and olives',
    price: 17
  }

  cheesePizza = {
    name: 'cheese',
    description: 'mozzarella, gorgonzola, fontina, and parmigiano',
    price: 12
  }

  veggiePizza = {
    name: 'veggie',
    description: 'mushrooms, green peppers, tomatoes, black olives, and onions',
    price: 11
  }

  clickEvent() {
    this.msg = 'helllllo';
    // this.msg = this.veggiePizza.name;

    return this.msg;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
