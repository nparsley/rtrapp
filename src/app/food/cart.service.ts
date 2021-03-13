import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];


  addSideToCart(sides) {
    this.items.push(sides);
  }

  addBurgerToCart(burgers) {
    this.items.push(burgers);
  }

  addPizzaToCart(pizzas) {
    this.items.push(pizzas);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
