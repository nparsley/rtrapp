import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {
  burgers = [
    {
      name: 'bbq bacon',
      description: 'bacon, american cheese, onions, pickles, and BBQ sauce',
      price: 13
    },

    {
      name: 'swiss avocado',
      description: 'swiss cheese, avocado slices, and tomatoes',
      price: 11
    },

    {
      name: 'blue cheese',
      description: 'blue cheese, fried onion strings, jalapenos and spicy ketchup',
      price: 12
    },

    {
      name: 'cheese burger',
      description: 'american cheese, lettuce, tomatoes, onions, and pickles',
      price: 10
    }
  ];


  constructor(private cartservice: CartService, private route: ActivatedRoute) { }

  addToCart() {
    this.cartservice.addToCart();
    window.alert('Your burger has been added to the cart.');
  }

  ngOnInit(): void {
  }

}
