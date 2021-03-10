import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {
  burgerType = [];
  cartBurger = [];

  bbqBacon = {
    name: 'bbq bacon',
    description: 'bacon, american cheese, onions, pickles, and BBQ sauce',
    price: 13
  }

  swissAvocado = {
    name: 'swiss avocado',
    description: 'swiss cheese, avocado slices, and tomatoes',
    price: 11
  }

  blueCheese = {
    name: 'blue cheese',
    description: 'blue cheese, fried onion strings, jalapenos and spicy ketchup',
    price: 12
  }

  cheese = {
    name: 'cheese burger',
    description: 'american cheese, lettuce, tomatoes, onions, and pickles',
    price: 10
  }

  constructor(private addtocart: AddToCartService) { }

  addToCart(/* product */) {
    this.addtocart.addToCart(/* product */);
    window.alert('Your product has been added to the cart.');
  }

  ngOnInit(): void {
  }

}
