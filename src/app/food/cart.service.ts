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

  // remove all cart items (need to reference i = index for this.items[])
  removeCartItem(item) {
    this.items.splice(item);
    console.log('item was removed');
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
