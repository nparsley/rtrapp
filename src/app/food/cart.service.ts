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
  cartTotal: number;
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
      // signature: scan(accumulator: function, seed: any): Observable
      scan((acc: MenuItem[], item: MenuItem) => {
          if (item) {
            if (item.remove) {
              return [...acc.filter(i => i !== item)];
            }
            return [...acc, item];
          }
        }, [])
    );
  }

// Cart Totals Sum
  get total$(): Observable<CartTotals> {
    return this.cart$.pipe(
      map(items => {
        let total = 0;
        for (const i of items) {
          total =+ i.price;
        }
        return total;
      }),
      map(cost => ({
        subTotal: cost,
        tax: .056 * cost,
        cartTotal: .056 * cost + cost
      })
      )
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
