import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable, of, Subject } from 'rxjs';
import { startWith, scan, map, tap, switchMap, debounceTime, shareReplay } from 'rxjs/operators';
import { FOOD_ITEMS } from '../food';
import { v4 as uuid } from 'uuid';


export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  remove?: boolean;
  uuid?: any;
}

export interface CartTotals {
  subTotal: number;
  tax: number;
  cartTotal: number;
}

export interface StateCart {
  store: MenuItem[];
  cart: MenuItem[];
  totals: CartTotals;
}



@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<MenuItem> = [];
  deleteItems: Array<MenuItem> = [];


// Observables
  private stateCart$ = new BehaviorSubject<StateCart>(null);
  private cartAdd$ = new Subject<MenuItem>();
  private cartRemove$ = new Subject<MenuItem>();



// Cart Observable
  private get cart$(): Observable<MenuItem[]> {
    return merge(this.cartAdd$, this.cartRemove$).pipe(
      startWith([]),
      // signature: scan(accumulator: function, seed: any): Observable
      scan((acc: MenuItem[], item: MenuItem) => {
          if (item) {
            if (item.remove) {
              return [...acc.filter(i => i.uuid !== item.uuid)];
            }
            return [...acc, item];
          }
        }, [])
    );
  }

// Cart Totals Sum
  private get total$(): Observable<CartTotals> {
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

// State Cart setup

    // signature: switchMap(project: function: Observable, resultSelector:
    // function(outerValue, innerValue, outerIndex, innerIndex): any): Observable

    state$: Observable<StateCart> = this.stateCart$.pipe(
      switchMap(() => this.getItems().pipe(
        ([this.cart$, this.total$]),
      )),
    map(([store, cart, totals]: any) => ({ store, cart, totals })),
/*     tap(state => {
        console.log(state);
    }) */
  );


  // edit rxjs ------------
  getDataItems() {
    return of (FOOD_ITEMS);
  }

  addCartMenuItem(item: MenuItem) {
    this.cartAdd$.next({ ...item, uuid: uuid() });
  }

  removeCartMenuItem(item: MenuItem) {
    this.cartRemove$.next({ ...item, remove: true })
  }

  // ------------------

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
