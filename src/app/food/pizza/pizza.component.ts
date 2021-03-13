import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizza;

  pizzas = [
    {
      id: 1,
      name: 'margherita',
      description: 'tomatoes, mozzarella, and fresh basil',
      price: 13
    },

    {
      id: 2,
      name: 'pepperoni',
      description: 'pepperoni, mozzarella, and olives',
      price: 17
    },

    {
      id: 3,
      name: 'cheese',
      description: 'mozzarella, gorgonzola, fontina, and parmigiano',
      price: 12
    },

    {
      id: 4,
      name: 'veggie',
      description: 'mushrooms, green peppers, tomatoes, black olives, and onions',
      price: 11
    }
  ];



  constructor(private cartservice: CartService, private route: ActivatedRoute) { }

  addPizzaToCart(pizza) {
    this.cartservice.addPizzaToCart(pizza);
    window.alert('Your pizza has been added to the cart.');
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const pizzaIdFromRoute = Number(routeParams.get('pizzaId'));

    this.pizza = this.pizzas.find(pizza => pizza.id === pizzaIdFromRoute);
  }

}
