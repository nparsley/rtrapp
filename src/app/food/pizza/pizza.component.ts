import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzaType = [];
  cartPizza = [];

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



  constructor() { }

  ngOnInit(): void {
  }

}
