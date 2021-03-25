import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { startWith, scan, map, tap, switchMap } from 'rxjs/operators';
import { FOOD_ITEMS } from '../food';


export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  remove?: boolean;
}

export interface CartTotals {
  subTotal: number;
  tax: number;
  checkoutTotal: number;
}

export interface StateCart {
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

// Cart Observable
  get cart$(): Observable<MenuItem[]> {
    return merge(this.cartAdd$, this.cartRemove$).pipe(
      startWith([]),
      scan((acc: MenuItem[], item: MenuItem ) => {
        if (item) {
          if (item.remove) {
            return [...acc.filter(i => i !== item)];
          }
          return [...acc, item];
        }
      }, [])
    );
  }


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
