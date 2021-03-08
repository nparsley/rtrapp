import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzaType = [
    {
      name: 'Margherita',
      description: 'tomatoes, mozzarella, and fresh basil',
      price: 15.00
    },
    {
      name: 'Pepperoni',
      description: 'pepperoni, mozzarella, and olives',
      price: 17.00
    },
    {
      name: 'Cheese',
      description: 'mozzarella, gorgonzola, fontina, and parmigiano',
      price: 12.00
    },
    {
      name: 'Veggie',
      description: 'mushrooms, green peppers, tomatoes, black olives, and onions',
      price: 14.00
    }
  ];
  cartPizza = [];

  constructor() { }

  ngOnInit(): void {
  }

}
