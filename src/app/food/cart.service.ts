import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface CartTotals {
  subTotal: number;
  tax: number;
  checkoutTotal: number;
}

interface StateCart {
  store: MenuItem[];
  cart: MenuItem[];
  totals: CartTotals
}



@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<MenuItem> = [];
  deleteItems: Array<MenuItem> = [];


  // Observables
  stateCart$ = new BehaviorSubject<StateCart>(null);
  cartAdd$ = new Subject<MenuItem>();
  cartRemove$ = new Subject<MenuItem>();


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

  removeCartItem(item) {
    console.log(item);
    this.items.splice(item.indexOf(item), 1);
    console.log('item was removed');
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
