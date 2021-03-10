import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  pizzas = [
    {
      name: 'margherita',
      description: 'tomatoes, mozzarella, and fresh basil',
      price: 13
    },

    {
      name: 'pepperoni',
      description: 'pepperoni, mozzarella, and olives',
      price: 17
    },

    {
      name: 'cheese',
      description: 'mozzarella, gorgonzola, fontina, and parmigiano',
      price: 12
    },

    {
      name: 'veggie',
      description: 'mushrooms, green peppers, tomatoes, black olives, and onions',
      price: 11
    }
  ];



  constructor(private cartservice: CartService) { }

  addToCart() {
    this.cartservice.addToCart();
    window.alert('Your pizza has been added to the cart.');
  }

  ngOnInit(): void {
  }

}
