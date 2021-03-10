import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../food/add-to-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  msg: string;


/*   margheritaPizza = {
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
  } */

  clickEvent() {
    this.msg = 'helllllo';


    return this.msg;

  }

  constructor(private addtocart: AddToCartService) { }

  // addToCart(/* product */) {
  //   this.addtocart.addToCart(/* product */);
  //   window.alert('Your product has been added to the cart.');
  // }

  ngOnInit(): void {
  }

}
