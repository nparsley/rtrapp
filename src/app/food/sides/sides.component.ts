import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.css']
})
export class SidesComponent implements OnInit {


  sides = [
    {
      // id: 1,
      name: 'sweet potato fries',
      description: 'baked and served with spicy ketchup',
      price: 5
    },

    {
      // id: 2,
      name: 'fried onion rings',
      description: 'deep-fried with a side of ranch',
      price: 6
    },

    {
      // id: 3,
      name: 'salad',
      description: 'greens, tomatoes, croutons, and cucumbers',
      price: 3
    },

    {
      // id: 4,
      name: 'wings',
      description: 'served with celery and carrots',
      price: 7
    }
  ];

  constructor(private cartservice: CartService) { }

  addToCart() {
    this.cartservice.addToCart();
    window.alert('Your side has been added to the cart.');
  }

  ngOnInit(): void {
  }

}
